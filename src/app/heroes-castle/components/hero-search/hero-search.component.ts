import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeroType } from '../../types/hero-type';
import { Observable, of, ReplaySubject } from 'rxjs';
import { HeroService } from '../../services/hero.service';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { HeroSearchParams } from '../../model/hero-search-params.interface';
import { EmailAsyncValidator } from '../../directives/email-async-validator.directive';
import { HeroesReset, SearchHeroes, UpdateSearchPreviewParams } from '../../store/heroes-castle-store.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnDestroy {
  @Output() searchEvent$ = new EventEmitter<HeroSearchParams>();

  searchFormGroup: FormGroup;
  heroType = HeroType;
  fetchNames$: Observable<string[]>;
  isWorkerChosen$: Observable<boolean>;
  isContentLoading = false;

  private onDestroy$ = new ReplaySubject();
  private MIN_TEXT_SEARCH_LENGTH = 2;

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService,
    private emailAsyncValidator: EmailAsyncValidator,
    private store: Store
  ) {
    this.buildSearchFormGroup();

    this.fetchNames$ = this.searchFormGroup.controls.firstName.valueChanges.pipe(
      distinctUntilChanged(),
      filter((text) => text.length > this.MIN_TEXT_SEARCH_LENGTH),
      tap(() => this.isContentLoading = true),
      debounceTime(environment.debounceTimeRequest),
      switchMap((searchText) => this.heroService.getHeroNames(searchText)),
      tap(() => this.isContentLoading = false),
      catchError(() => {
        this.isContentLoading = false;
        return of([]);
      })
    );

    this.isWorkerChosen$ = this.searchFormGroup.controls.type.valueChanges.pipe(
      takeUntil(this.onDestroy$),
      map((type) => type === HeroType.WORKER)
    );

    this.searchFormGroup.valueChanges.pipe(
      distinctUntilChanged(),
      tap(() => this.store.dispatch(UpdateSearchPreviewParams({ searchParamsPreview: this.searchFormGroup.value })))
    ).subscribe();
  }

  onSearch() {
    this.store.dispatch(SearchHeroes({ searchParams: this.searchFormGroup.value }));
  }

  resetSearchForm() {
    this.searchFormGroup.reset();
    this.store.dispatch(HeroesReset());
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

  private buildSearchFormGroup() {
    this.searchFormGroup = this.fb.group({
      firstName: this.fb.control(null),
      mail: this.fb.control(null, {
          asyncValidators: [this.emailAsyncValidator.validate.bind(this)]
        }
      ),
      contractDateFrom: this.fb.control(null),
      contractDateTo: this.fb.control(null),
      type: this.fb.control(null)
    }, { updateOn: 'blur' });
  }
}
