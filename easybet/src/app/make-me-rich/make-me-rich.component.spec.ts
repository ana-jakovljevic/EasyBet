import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeMeRichComponent } from './make-me-rich.component';

describe('MakeMeRichComponent', () => {
  let component: MakeMeRichComponent;
  let fixture: ComponentFixture<MakeMeRichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeMeRichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeMeRichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
