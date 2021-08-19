import { Component, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroType } from '../../types/hero-type';
import { Observable } from 'rxjs';
import { HeroService } from '../../service/hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent {
  @Output() searchFormGroup: FormGroup;
  heroTypes = HeroType;
  fetchNames$: Observable<string[]>;

  constructor(private heroService: HeroService) {
    this.searchFormGroup = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      contractDateFrom: new FormControl(null),
      contractDateTo: new FormControl(null),
      type: new FormControl(null)
    });

    this.fetchNames$ = this.searchFormGroup.controls.name.valueChanges.pipe(
      debounceTime(environment.debounceTimeRequest),
      distinctUntilChanged((curr, prev) => curr.toLowerCase() === prev.toLowerCase()),
      switchMap((searchText) => this.heroService.getHeroNames(searchText))
    );

    this.searchFormGroup.valueChanges.subscribe(console.log);
  }

  getSearchParamsString(): string {
    return this.searchFormGroup.toString();
  }

  search() {
    // TODO: search
  }
}
