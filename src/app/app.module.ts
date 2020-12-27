import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChequeInputComponent } from './cheque-input/cheque-input.component';
import { ChequeDetailComponent } from './cheque-detail/cheque-detail.component';
import { ChequeListComponent } from './cheque-list/cheque-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PretendAPIService } from './pretend-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ChequeInputComponent,
    ChequeDetailComponent,
    ChequeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // Simulate a backend with HttpClientInMemoryWebAPIModule
    // Replace later with real requests
    HttpClientInMemoryWebApiModule.forRoot(
      PretendAPIService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
