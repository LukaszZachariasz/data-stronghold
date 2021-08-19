import { Hero } from './model/hero';
import { HeroType } from './types/hero-type';

export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice', mail: 'nice@mail.com', type: HeroType.BOSS, contractDate: new Date(2001, 2, 3)},
  { id: 12, name: 'Narco', mail: 'narco@mail.com', type: HeroType.MANAGER, contractDate: new Date(2002, 2, 3)},
  { id: 13, name: 'Bombasto', mail: 'boma@mail.com', type: HeroType.MANAGER, contractDate: new Date(2003, 2, 3)},
  { id: 14, name: 'Celeritas', mail: 'cele@mail.com', type: HeroType.WORKER, contractDate: new Date(2004, 2, 3)},
  { id: 15, name: 'Magneta', mail: 'magneta@mail.com', type: HeroType.WORKER, contractDate: new Date(2005, 2, 3)},
  { id: 16, name: 'RubberMan', mail: 'rubber@mail.com', type: HeroType.WORKER, contractDate: new Date(2006, 2, 3)},
  { id: 17, name: 'Dynama', mail: 'dynama@mail.com', type: HeroType.MANAGER, contractDate: new Date(2007, 2, 3)},
  { id: 18, name: 'Dr IQ', mail: 'driq@mail.com', type: HeroType.WORKER, contractDate: new Date(2008, 2, 3)},
  { id: 19, name: 'Magma', mail: 'magma@mail.com', type: HeroType.WORKER, contractDate: new Date(2009, 2, 3)},
  { id: 20, name: 'Tornado', mail: 'tornado@mail.com', type: HeroType.WORKER, contractDate: new Date(2010, 2, 3)},
];
