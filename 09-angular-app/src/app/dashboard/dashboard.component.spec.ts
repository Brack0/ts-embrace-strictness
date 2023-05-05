import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';

import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let heroService: jasmine.SpyObj<HeroService>;
  let getHeroesSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    heroService = jasmine.createSpyObj<HeroService>('HeroService', [
      'getHeroes',
    ]);
    getHeroesSpy = heroService.getHeroes.and.returnValue(of(HEROES));
    void TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        DashboardComponent,
        HeroSearchComponent,
      ],
      providers: [{ provide: HeroService, useValue: heroService }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Heroes" as headline', () => {
    expect(
      (fixture.nativeElement as HTMLElement).querySelector('h2')?.textContent
    ).toEqual('Top Heroes');
  });

  it('should call heroService', waitForAsync(() => {
    expect(getHeroesSpy.calls.any()).toBe(true);
  }));

  it('should display 4 links', waitForAsync(() => {
    expect(
      (fixture.nativeElement as HTMLElement).querySelectorAll('a').length
    ).toEqual(4);
  }));
});
