import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cheque } from "./cheque";

@Injectable({
  providedIn: 'root'
})
export class PretendAPIService implements InMemoryDbService{

  createDb(){
    let cheques: Cheque[] = [

      {id: 1, value: 1},
      {id: 2, value: 501},
      {id: 3, value: 100000000},
      {id: 4, value: 981234},
      {id: 5, value: -5},

    ];
    return {cheques};

  }

  /* GenID required to add to empty dbs */
  genId(cheques: Cheque[]): number {
    return cheques.length > 0 ? Math.max(...cheques.map(cheque => cheque.id)) + 1 : 1;
  }

  constructor() { }
}
