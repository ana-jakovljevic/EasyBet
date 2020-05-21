import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballLeagueComponent } from './basketball-league.component';

describe('BasketballLeagueComponent', () => {
  let component: BasketballLeagueComponent;
  let fixture: ComponentFixture<BasketballLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketballLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
