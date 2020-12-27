import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChequeInputComponent } from './cheque-input/cheque-input.component';
import { ChequeListComponent } from './cheque-list/cheque-list.component';

const routes: Routes = [
  { path : '', component: ChequeListComponent},
  { path : 'cheque/:id', component: ChequeInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
