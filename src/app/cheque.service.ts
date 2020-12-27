import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cheque } from './cheque';
import { NumberFormatterService } from './number-formatter.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {

  constructor(private httpClient : HttpClient, private numberFormatter : NumberFormatterService) { }

  // Pretend API urls
  chequeUrl  : string = 'api/cheques';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /* max and min cheque values this service handles */
  min: number = 0;
  max: number = 10000000000000; /* 10 trillion should be plenty - capped at this to avoid floating point precision issues */
  chequeList : Cheque[]= [
    { id: 0, value: 0.00}
  ];


  chequeMinMax(val : number){
    return Math.min(Math.max(val,this.min),this.max)
  }


  getChequeList() : Observable<Cheque[]>{
    return this.httpClient.get<Cheque[]>(this.chequeUrl);
  }

  addCheque(cheque : Cheque) : Observable<Cheque> {
    return this.httpClient.post<Cheque>(this.chequeUrl,cheque, this.httpOptions);
  }

  getCheque(id : number) : Observable<Cheque>{
    return this.httpClient.get<Cheque>(`${this.chequeUrl}/${id}`);
  }

  updateCheque(cheque : Cheque) : Observable<any> {
    return this.httpClient.put(this.chequeUrl, cheque, this.httpOptions);
  }

  deleteCheque(id : number) : Observable<any> {
    return this.httpClient.delete<Cheque>(`${this.chequeUrl}/${id}`);
  }

  /* get cheque value as words */
  getChequeText(val : number) {
    /* re-running chequeMinMax prevents incorrect string appearing, when entering > max values in components */
    return this.FormatChequeAsWords(this.chequeMinMax(val));
  }

  FormatChequeAsWords(num: number) {
    // Get our dollar array
    let dollarVal: number = Math.trunc(num);
    let dollarArray: number[] = this.numberFormatter.IntAsArray(dollarVal);

    // Get our cents array
    let centVal: number = Math.round((num - dollarVal) * 100);
    let centsArray: number[] = this.numberFormatter.IntAsArray(centVal);

    let dollars: string = this.numberFormatter.formatNumArrayAsWords(dollarArray);
    let cents: string   = this.numberFormatter.formatNumArrayAsWords(centsArray);

    return dollars + (dollars ? ` dollar${dollarVal == 1 ? '' : 's'} ` : '' ) + (dollars && cents ? ' and ' : '' ) + cents + (cents ? ` cent${centVal == 1 ? '' : 's'} ` : '');
  }



}
