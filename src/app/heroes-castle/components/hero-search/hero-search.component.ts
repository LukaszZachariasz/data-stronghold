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

  get isHeroSearchTypeWorker(): boolean {
    return this.searchFormGroup.controls.type.value === HeroType.WORKER;
  }

  private onDestroy$ = new ReplaySubject();

  constructor(
    private formBuilder: FormBuilder,
    private heroService: HeroService,
    private emailAsyncValidator: EmailAsyncValidator,
    private heroesCastleActionService: HeroesCastleActionService,
  ) {
    this.searchFormGroup = this.buildSearchFormGroup();
    this.heroesCastleActionService.loadHeroes();
    this.fetchNames$ = this.autocompleteResult$();
    this.updateStateWithSearchFormChanges();
  }

  searchEventHandler() {
    this.heroesCastleActionService.search(this.searchFormGroup.value);
  }

  clearEventHandler() {
    this.searchFormGroup.reset();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

  private buildSearchFormGroup(): FormGroup {
    return this.formBuilder.group({
      firstName: this.formBuilder.control(null),
      mail: this.formBuilder.control(null, {
          asyncValidators: [this.emailAsyncValidator.validate.bind(this)]
        }
      ),
      contractDateFrom: this.formBuilder.control(null),
      contractDateTo: this.formBuilder.control(null),
      type: this.formBuilder.control(null)
    }, { updateOn: 'blur' });
  }

  private autocompleteResult$(): Observable<string[]> {
    return this.searchFormGroup.controls.firstName.valueChanges.pipe(
      distinctUntilChanged(),
      filter((text) => text.length > environment.minLengthText),
      tap(() => this.isContentLoading = true),
      debounceTime(environment.debounceTimeRequest),
      switchMap((searchText) => this.heroService.getHeroNames(searchText)),
      tap(() => this.isContentLoading = false),
      catchError(() => {
        this.isContentLoading = false;
        return of([]);
      })
    );
  }

  private updateStateWithSearchFormChanges(): void {
    this.searchFormGroup.valueChanges.pipe(
      distinctUntilChanged(),
      takeUntil(this.onDestroy$),
    ).subscribe(() => this.heroesCastleActionService.updateSearchPreviewData(this.searchFormGroup.value));
  }
}
