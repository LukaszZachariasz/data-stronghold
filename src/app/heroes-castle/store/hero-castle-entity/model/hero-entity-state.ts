import { EntityState } from '@ngrx/entity';
import { Hero } from '../../../model/hero.interface';

export interface HeroEntityState extends EntityState<Hero> {}
