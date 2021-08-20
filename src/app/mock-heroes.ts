import { Hero } from './model/hero.interface';
import { HeroType } from './types/hero-type';

export const HEROES: Hero[] = [
  { id: 11, firstName: 'Dr Nice', lastName: 'Angelo', mail: 'nice@mail.com', type: HeroType.BOSS, contractDate: new Date(2001, 2, 3)},
  { id: 12, firstName: 'Narco', lastName: 'Angelo', mail: 'narco@mail.com', type: HeroType.MANAGER, contractDate: new Date(2002, 2, 3)},
  { id: 13, firstName: 'Bombasto', lastName: 'Angelo', mail: 'boma@mail.com', type: HeroType.MANAGER, contractDate: new Date(2003, 2, 3)},
  { id: 14, firstName: 'Celeritas', lastName: 'Angelo', mail: 'cele@mail.com', type: HeroType.WORKER, contractDate: new Date(2004, 2, 3)},
  { id: 15, firstName: 'Magneta', lastName: 'Angelo', mail: 'magneta@mail.com', type: HeroType.WORKER, contractDate: new Date(2005, 2, 3)},
  { id: 16, firstName: 'RubberMan', lastName: 'Angelo', mail: 'rubber@mail.com', type: HeroType.WORKER, contractDate: new Date(2006, 2, 3)},
  { id: 17, firstName: 'Dynama', lastName: 'Angelo', mail: 'dynama@mail.com', type: HeroType.MANAGER, contractDate: new Date(2007, 2, 3)},
  { id: 18, firstName: 'Dr IQ', lastName: 'Angelo', mail: 'driq@mail.com', type: HeroType.WORKER, contractDate: new Date(2008, 2, 3)},
  { id: 19, firstName: 'Magma', lastName: 'Angelo', mail: 'magma@mail.com', type: HeroType.WORKER, contractDate: new Date(2009, 2, 3)},
  { id: 20, firstName: 'Tornado', lastName: 'Angelo', mail: 'tornado@mail.com', type: HeroType.WORKER, contractDate: new Date(2010, 2, 3)},
];
