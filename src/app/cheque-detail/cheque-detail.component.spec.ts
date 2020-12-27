import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChequeService } from '../cheque.service';

import { ChequeDetailComponent } from './cheque-detail.component';

describe('ChequeDetailComponent', () => {
  let component: ChequeDetailComponent;
  let fixture: ComponentFixture<ChequeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeDetailComponent ],
      providers:[ChequeService],
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
