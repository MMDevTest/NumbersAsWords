import { Component, Input, OnInit } from '@angular/core';
import { Cheque } from '../cheque';
import { ChequeService } from "../cheque.service" ;

@Component({
  selector: 'app-cheque-detail',
  templateUrl: './cheque-detail.component.html',
  styleUrls: ['./cheque-detail.component.css']
})
export class ChequeDetailComponent implements OnInit {

  @Input() cheque!: Cheque;

  get chequeText(){
    return this.chequeService.chequeText;
  }

  constructor(private chequeService: ChequeService) { }


  ngOnInit(): void {
  }


}
