import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballLeagueComponent } from './football-league.component';

describe('FootballLeagueComponent', () => {
  let component: FootballLeagueComponent;
  let fixture: ComponentFixture<FootballLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
