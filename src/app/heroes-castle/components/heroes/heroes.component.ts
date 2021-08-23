import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../../model/hero.interface';
import { HeroService } from '../../services/hero.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ReplaySubject, Subject } from 'rxjs';
import { filter, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { HeroSearchParams } from '../../model/hero-search-params.interface';
import { PaginationInterface } from '../../model/pagination.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogData } from '../../../shared/components/confirm-dialog/confirm-dialog-data';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['id', 'mail', 'firstName', 'lastName', 'type', 'contractDate', 'actions'];
  heroData: Hero[] = [];
  dataSource = new MatTableDataSource<Hero>(this.heroData);

  pageSize = 5;
  pageIndex = 0;
  totalElements = 0;

  private reloadData$ = new Subject<HeroSearchParams>();
  private destroyed$ = new ReplaySubject();

  constructor(private heroService: HeroService, private confirmDialog: MatDialog) {
  }

  ngOnInit() {
    this.reloadData$.asObservable()
      .pipe(
        takeUntil(this.destroyed$),
        switchMap((searchParams) => this.heroService.getHeroes(this.getPaginationData(), searchParams))
      ).subscribe(({ data, totalElements }) => this.reloadTableContent(data, totalElements));

    this.reloadData$.next();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onDetails(id: number) {
    // TODO: prepare details page navigation
  }

  onRemove(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      title: 'Confirm remove',
      description: 'Are you sure to remove?'
    } as ConfirmDialogData;

    this.confirmDialog.open(ConfirmDialogComponent, dialogConfig).afterClosed().pipe(
      take(1),
      filter(confirm => !!confirm),
      switchMap(() => this.heroService.deleteHero(id)),
      tap(() => this.reloadData$.next())
    ).subscribe();
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

  private reloadTableContent(pageData: Hero[], totalElements: number) {
    this.heroData = pageData;
    this.totalElements = totalElements;
    this.dataSource = new MatTableDataSource<Hero>(this.heroData);
  }

  private getPaginationData(): PaginationInterface {
    return { pageIndex: this.pageIndex, pageSize: this.pageSize };
  }
}
