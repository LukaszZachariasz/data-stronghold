import { Pagination } from '../../../model/pagination';
import { HeroSearchParams } from '../../../model/hero-search-params';

export interface HeroesCastleState {
  pagination: Pagination;
  searchParams?: HeroSearchParams;
  searchParamsPreview?: HeroSearchParams;
  totalElements: number;
}
