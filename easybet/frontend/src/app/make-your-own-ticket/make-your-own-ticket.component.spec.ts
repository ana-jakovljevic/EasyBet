import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeYourOwnTicketComponent } from './make-your-own-ticket.component';

describe('MakeYourOwnTicketComponent', () => {
  let component: MakeYourOwnTicketComponent;
  let fixture: ComponentFixture<MakeYourOwnTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeYourOwnTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeYourOwnTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
