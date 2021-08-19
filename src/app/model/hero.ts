import { HeroType } from '../types/hero-type';

export interface Hero {
  id: number;
  name: string;
  mail: string;
  type: HeroType;
  contractDate: Date;
}

