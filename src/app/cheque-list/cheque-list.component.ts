import { Component, OnInit } from '@angular/core';
import { Cheque } from '../cheque';
import { ChequeService } from '../cheque.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cheque-list',
  templateUrl: './cheque-list.component.html',
  styleUrls: ['./cheque-list.component.css']
})
export class ChequeListComponent implements OnInit {

  chequeList : Cheque[] = [];
  SelectedCheque : Cheque | undefined;

  getCheques(): void {
    this.chequeService.getChequeList().subscribe(chequeList => this.chequeList = chequeList)
  }

  constructor(private chequeService : ChequeService, private router : Router) {

  }

  clickCheque(cheque : Cheque){
    this.SelectedCheque = this.SelectedCheque == cheque ? undefined : cheque;
  }

  addCheque() {
      this.chequeService.addCheque({value : 0} as Cheque).subscribe(cheque => {
      this.chequeList.push(cheque);
      this.router.navigateByUrl(`cheque/${cheque.id}`);
    })

  }

  deleteCheque(cheque : Cheque){
    this.chequeList = this.chequeList.filter(chequeItm => chequeItm.id !== cheque.id)
    this.chequeService.deleteCheque(cheque.id).subscribe();
  }

  ngOnInit(): void {
    this.getCheques()
  }

}
