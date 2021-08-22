import { HeroType } from '../types/hero-type';

export interface Hero {
  id: number;
  firstName: string;
  lastName: string;
  mail: string;
  type: HeroType;
  contractDate: Date;
}
