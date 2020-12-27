import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChequeService } from '../cheque.service';

import { ChequeInputComponent } from './cheque-input.component';

describe('ChequeInputComponent', () => {
  let component: ChequeInputComponent;
  let fixture: ComponentFixture<ChequeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeInputComponent ],
      providers: [ChequeService],
      imports: [HttpClientTestingModule, RouterTestingModule]

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
