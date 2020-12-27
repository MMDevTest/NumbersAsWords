import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debug } from 'console';
import { Cheque } from '../cheque';
import { ChequeService } from "../cheque.service" ;

@Component({
  selector: 'app-cheque-input',
  templateUrl: './cheque-input.component.html',
  styleUrls: ['./cheque-input.component.css']
})
export class ChequeInputComponent implements OnInit {

  cheque : Cheque;


  constructor(public chequeService: ChequeService) {
    this.cheque = chequeService.cheque;
  }

  ngOnInit(): void {
  }


}
