import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from './hero.service';
import { HeroesExistsResolver } from './heroes-exists-resolver.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    HeroService,
    HeroesExistsResolver
  ]
})
export class ServiceModule {
}
