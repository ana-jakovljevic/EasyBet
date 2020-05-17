import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballMatchesListComponent } from './basketball-matches-list.component';

describe('BasketballMatchesListComponent', () => {
  let component: BasketballMatchesListComponent;
  let fixture: ComponentFixture<BasketballMatchesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketballMatchesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballMatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
