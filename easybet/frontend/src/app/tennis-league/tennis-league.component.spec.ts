import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisLeagueComponent } from './tennis-league.component';

describe('TennisLeagueComponent', () => {
  let component: TennisLeagueComponent;
  let fixture: ComponentFixture<TennisLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
