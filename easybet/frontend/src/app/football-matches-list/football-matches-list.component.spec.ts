import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballMatchesListComponent } from './football-matches-list.component';

describe('FootballMatchesListComponent', () => {
  let component: FootballMatchesListComponent;
  let fixture: ComponentFixture<FootballMatchesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballMatchesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballMatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
