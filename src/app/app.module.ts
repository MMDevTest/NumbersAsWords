import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChequeInputComponent } from './cheque-input/cheque-input.component';
import { ChequeDetailComponent } from './cheque-detail/cheque-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChequeInputComponent,
    ChequeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
