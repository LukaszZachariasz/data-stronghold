import { Hero } from './hero.interface';

export interface HeroDataResponse {
  data: Hero[];
  totalElements: number;
}
