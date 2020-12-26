import { Component, OnInit } from '@angular/core';
import { Cheque } from '../cheque';
import { ChequeService } from "../cheque.service" ;

@Component({
  selector: 'app-cheque-input',
  templateUrl: './cheque-input.component.html',
  styleUrls: ['./cheque-input.component.css']
})
export class ChequeInputComponent implements OnInit {

  constructor(private chequeService: ChequeService) {
    this.cheque = chequeService.cheque;
  }

  ngOnInit(): void {
  }

  cheque : Cheque;;

}
