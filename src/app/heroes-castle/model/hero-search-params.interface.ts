import { HeroType } from '../types/hero-type';

export interface HeroSearchParams {
  firstName?: string;
  type?: HeroType;
  mail?: string;
  contractDateFrom?: string;
  contractDateTo?: string;
}
