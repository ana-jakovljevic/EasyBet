import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisMatchesListComponent } from './tennis-matches-list.component';

describe('TennisMatchesListComponent', () => {
  let component: TennisMatchesListComponent;
  let fixture: ComponentFixture<TennisMatchesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisMatchesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisMatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
