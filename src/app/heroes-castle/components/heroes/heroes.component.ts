import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../../model/hero.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ReplaySubject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogData } from '../../../shared/components/confirm-dialog/confirm-dialog-data';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesCastleStateService } from '../../store/heroes-castle-state.service';
import { HeroesCastleActionService } from '../../store/heroes-castle-action.service';

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

  paginationData$ = this.heroesCastleStoreService.selectPaginationData();
  heroesDataPage$ = this.heroesCastleStoreService.selectCastleHeroesPage();

  totalElements: number;

  private destroyed$ = new ReplaySubject();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private confirmDialog: MatDialog,
    private heroesCastleStoreService: HeroesCastleStateService,
    private heroesCastleActionService: HeroesCastleActionService
  ) {}

  ngOnInit() {
    this.heroesDataPage$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(({ heroes, totalElements }) => this.reloadTableContent(heroes, totalElements));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onRemove(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      title: 'Confirm remove',
      description: 'Are you sure to remove?'
    } as ConfirmDialogData;

    this.confirmDialog.open(ConfirmDialogComponent, dialogConfig)
      .afterClosed()
      .pipe(
        take(1),
        filter(confirm => !!confirm)
      ).subscribe(() => this.heroesCastleActionService.remove(id));
  }

  pageChange(pagination: PageEvent) {
    this.heroesCastleActionService.paginateData(pagination);
  }

  onDetails(heroId: number) {
    this.router.navigate(['hero-details', heroId]);
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  private reloadTableContent(pageData: Hero[], totalElements: number) {
    this.heroData = pageData;
    this.totalElements = totalElements;
    this.dataSource = new MatTableDataSource<Hero>(this.heroData);
  }
}
