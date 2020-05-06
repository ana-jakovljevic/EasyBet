import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballMatchListComponent } from './football-match-list.component';

describe('FootballMatchListComponent', () => {
  let component: FootballMatchListComponent;
  let fixture: ComponentFixture<FootballMatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FootballMatchListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballMatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
