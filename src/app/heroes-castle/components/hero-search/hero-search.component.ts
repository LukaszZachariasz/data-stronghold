import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeroType } from '../../types/hero-type';
import { Observable, of, ReplaySubject } from 'rxjs';
import { HeroService } from '../../services/hero.service';
import { catchError, debounceTime, distinctUntilChanged, filter, switchMap, takeUntil, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { EmailAsyncValidator } from '../../directives/email-async-validator.directive';
import { HeroesCastleActionService } from '../../store/heroes-castle-action.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnDestroy {
  searchFormGroup: FormGroup;
  heroType = HeroType;
  fetchNames$: Observable<string[]>;
  isContentLoading = false;

  get isHeroSearchTypeWorker() {
    return this.searchFormGroup.controls.type.value === HeroType.WORKER;
  }

  private onDestroy$ = new ReplaySubject();
  private MIN_TEXT_SEARCH_LENGTH = 2;

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService,
    private emailAsyncValidator: EmailAsyncValidator,
    private heroesCastleActionService: HeroesCastleActionService
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

    this.searchFormGroup.valueChanges.pipe(
      distinctUntilChanged(),
      takeUntil(this.onDestroy$),
    ).subscribe(() => this.heroesCastleActionService.updateSearchPreviewData(this.searchFormGroup.value));
  }

  onSearch() {
    this.heroesCastleActionService.search(this.searchFormGroup.value);
  }

  resetSearchForm() {
    this.searchFormGroup.reset();
    this.heroesCastleActionService.reset();
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
