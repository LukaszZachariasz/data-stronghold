import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../../model/hero.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ReplaySubject } from 'rxjs';
import { filter, take, takeUntil, withLatestFrom } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogData } from '../../../shared/components/confirm-dialog/confirm-dialog-data';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesCastleStateService } from '../../store/hero-castle/services/heroes-castle-state.service';
import { HeroesCastleActionService } from '../../store/hero-castle/services/heroes-castle-action.service';
import { PageUrls } from '../../../const/page-urls';
import { HeroCastleEntityStateService } from '../../store/hero-castle-entity/services/hero-castle-entity-state.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<Hero>([]);
  heroData: Hero[] = [];
  totalElements: number;
  displayedColumns = ['id', 'mail', 'firstName', 'lastName', 'type', 'contractDate', 'actions'];

  paginationData$ = this.heroesCastleStateService.selectPaginationData();
  totalHeroesCount$ = this.heroesCastleStateService.selectHeroesTotalCount();
  heroEntityData$ = this.heroCastleEntityStateService.selectCurrentlyStoredHeroes();

  private destroyed$ = new ReplaySubject();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
    private heroesCastleStateService: HeroesCastleStateService,
    private heroesCastleActionService: HeroesCastleActionService,
    private heroCastleEntityStateService: HeroCastleEntityStateService,
  ) {}

  ngOnInit(): void {
    this.heroEntityData$.pipe(
      withLatestFrom(this.totalHeroesCount$),
      takeUntil(this.destroyed$)
    ).subscribe(([heroes, totalElements]: [(Hero | undefined)[], number]) => this.reloadTableContent(heroes as Hero[], totalElements));
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onRemove(id: number): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      title: 'Confirm remove',
      description: 'Are you sure to remove?'
    } as ConfirmDialogData;

    this.matDialog.open(ConfirmDialogComponent, dialogConfig)
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
    this.router.navigate([PageUrls.HERO_DETAILS, heroId]);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  private reloadTableContent(pageData: Hero[], totalElements: number) {
    this.heroData = pageData ?? [];
    this.totalElements = totalElements;
    this.dataSource = new MatTableDataSource<Hero>(this.heroData);
  }
}
