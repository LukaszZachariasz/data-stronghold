import { Directive } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Directive({
  selector: '[appEmailAsyncValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: EmailAsyncValidator,
      multi: true
    }
  ]
})
export class EmailAsyncValidator implements AsyncValidator {
  constructor(
    private heroService: HeroService
  ) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return of(control.value)
      .pipe(
        filter(value => !!value),
        switchMap((value) => this.heroService.emailExist(value)),
        map(({length}) => length > 0 ? null : {emailNotExist: true})
      );
  }
}
