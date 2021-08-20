import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HeroType } from '../../types/hero-type';
import { Observable, ReplaySubject } from 'rxjs';
import { HeroService } from '../../service/hero.service';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HeroSearchParams } from '../../model/hero-search-params.interface';

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

  constructor(private fb: FormBuilder, private heroService: HeroService) {
    this.buildSearchFormGroup();

    this.fetchNames$ = this.searchFormGroup.controls.firstName.valueChanges.pipe(
      distinctUntilChanged(),
      filter((text) => text.length > this.MIN_TEXT_SEARCH_LENGTH),
      tap(() => this.isContentLoading = true),
      debounceTime(environment.debounceTimeRequest),
      switchMap((searchText) => this.heroService.getHeroNames(searchText)),
      tap(() => this.isContentLoading = false)
    );

    this.isWorkerChosen$ = this.searchFormGroup.controls.type.valueChanges.pipe(
      takeUntil(this.onDestroy$),
      map((type) => type === HeroType.WORKER)
    );

    // Display changes
    this.searchFormGroup.valueChanges.subscribe(console.log);
  }

  getSearchParams(): HeroSearchParams {
    const searchForm = this.searchFormGroup.controls;
    return {
      firstName: searchForm.firstName.value ?? '',
      type: searchForm.type.value ?? '',
      mail: searchForm.mail.value ?? '',
      contractDateTo: searchForm.contractDateTo.value ?? '',
      contractDateFrom: searchForm.contractDateFrom.value ?? ''
    };
  }

  search() {
    this.searchEvent$.next(this.getSearchParams());
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

  private buildSearchFormGroup() {
    this.searchFormGroup = this.fb.group({
      firstName: this.fb.control(null),
      mail: this.fb.control(null, { validators: [] }),
      contractDateFrom: this.fb.control(null),
      contractDateTo: this.fb.control(null),
      type: this.fb.control(null)
    });
  }
}
