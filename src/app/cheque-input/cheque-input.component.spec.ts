import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeInputComponent } from './cheque-input.component';

describe('ChequeInputComponent', () => {
  let component: ChequeInputComponent;
  let fixture: ComponentFixture<ChequeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
