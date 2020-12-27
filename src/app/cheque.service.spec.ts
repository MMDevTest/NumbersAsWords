import { TestBed } from '@angular/core/testing';
import { ChequeService } from './cheque.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ChequeService', () => {
  let service: ChequeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(ChequeService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // above max should return max // pass in 100 trillion and 99 cents
  it('should handle < max', () =>{
    expect(service.getChequeText(1000000000000000.99)).toEqual("ten trillion dollars")
  });

  // below min should return nothing
  it('should handle > max', () =>{
    expect(service.getChequeText(-50000)).toEqual("")
  });

  // zero min should return nothing
  it('should handle $0', () =>{
    expect(service.getChequeText(0)).toEqual("")
  });


  //singular
  it('should format $1', () =>{
    expect(service.getChequeText(1)).toEqual("one dollar")
  });

  it('should format $.01', () =>{
    expect(service.getChequeText(.01)).toEqual("one cent")
  });

  //plural
  it('should format $47', () =>{
    expect(service.getChequeText(47)).toEqual("forty seven dollars")
  });

  it('should format $.58', () =>{
    expect(service.getChequeText(.58)).toEqual("fifty eight cents")
  });

  // dollar & cents
  it('should format $1.36', () =>{
    expect(service.getChequeText(1.36)).toEqual("one dollar and thirty six cents")
  });

  //hundred AND
  it('should format $1.36', () =>{
    expect(service.getChequeText(1.36)).toEqual("one dollar and thirty six cents")
  });
  //chained AND
  it('should format $1000001', () =>{
    expect(service.getChequeText(1000001)).toEqual("one million and one dollars")
  });

  //random large number
  it('should format $89467215.36', () =>{
    expect(service.getChequeText(89467215.36)).toEqual("eighty nine million four hundred and sixty seven thousand two hundred and fifteen dollars and thirty six cents")
  });

  //three decimal places gets rounded
  it('should format $1.306', () =>{
    expect(service.getChequeText(1.306)).toEqual("one dollar and thirty one cents")
  });

  //reject string
  it('should reject NaN', () =>{
    expect(service.getChequeText(parseFloat('z'))).toEqual("")
  });


});
