import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Cheque } from '../cheque';
import { ChequeService } from "../cheque.service" ;

@Component({
  selector: 'app-cheque-input',
  templateUrl: './cheque-input.component.html',
  styleUrls: ['./cheque-input.component.css']
})
export class ChequeInputComponent implements OnInit {

  min: number = 0;
  max: number = 999999999999999; /* 999 trillion should be plenty */

  cheque : Cheque;

  /* ensure we can't enter a silly value */
  checkMinMax(val: number){
    this.cheque.value = Math.min(Math.max(val,this.min),this.max);
  }

  constructor(private chequeService: ChequeService) {
    this.cheque = chequeService.cheque;
  }

  ngOnInit(): void {
  }


}
