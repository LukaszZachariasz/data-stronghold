import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Hero } from '../../model/hero.interface';
import { HeroService } from '../../service/hero.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EMPTY, merge, of, ReplaySubject, Subject } from 'rxjs';
import { switchMap, takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import { HeroSearchParams } from '../../model/hero-search-params.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['id', 'mail', 'firstName', 'lastName', 'actions'];
  heroData: Hero[] = [];
  dataSource = new MatTableDataSource<Hero>(this.heroData);

  pageSize = 5;
  pageIndex = 0;
  totalElements = 0;

  private reloadData$ = new Subject<HeroSearchParams>();
  private destroyed$ = new ReplaySubject();

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
   of(EMPTY).pipe(
      switchMap(() => this.reloadData$.asObservable()),
      takeUntil(this.destroyed$),
      tap(asdasd => { debugger }),
      switchMap((searchParams) => this.heroService.getHeroes({ pageIndex: this.pageIndex, pageSize: this.pageSize }, searchParams)),
    ).subscribe(({ data, totalElements }) => this.reload(totalElements, data));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onDetails(id: number) {
    // TODO: prepare details page navigation
  }

  onRemove(id: number) {
    this.heroService.delete(id).pipe(tap(() => this.reloadData$.next())).subscribe();
  }

  pageChange($event: PageEvent) {
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;
    this.reloadData$.next();
  }

  refreshData(params: HeroSearchParams) {
    this.reloadData$.next(params);
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  private reload(totalElements: number, data: Hero[]) {
    this.totalElements = totalElements;
    this.heroData = data;
    this.dataSource = new MatTableDataSource<Hero>(this.heroData);
  }
}
