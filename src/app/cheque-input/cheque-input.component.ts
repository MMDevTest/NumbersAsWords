import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cheque } from '../cheque';
import { ChequeService } from "../cheque.service" ;
import { Location } from "@angular/common";

@Component({
  selector: 'app-cheque-input',
  templateUrl: './cheque-input.component.html',
  styleUrls: ['./cheque-input.component.css']
})
export class ChequeInputComponent implements OnInit {

  @Input() cheque : Cheque | undefined;
  // cheque : Cheque;


  constructor(private route: ActivatedRoute, public chequeService: ChequeService, private location : Location) {
  }

  ngOnInit(): void {
    this.getCheque();
  }

  /* fetch our cheque id from our router param */
  getCheque(){
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.chequeService.getCheque(id).subscribe(cheque => this.cheque = cheque);
  }

  updateCheque(){
    this.chequeService.updateCheque(this.cheque!).subscribe( a => this.back());
  }

  back(){
    this.location.back();
  }


}
