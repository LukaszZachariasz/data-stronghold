import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Hero } from '../../model/hero.interface';

export const heroEntityAdapter: EntityAdapter<Hero> = createEntityAdapter<Hero>(
  { selectId: (hero) => hero.id }
);
