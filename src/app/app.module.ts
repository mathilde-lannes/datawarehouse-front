import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxGaugeModule } from 'ngx-gauge';

import { AppComponent } from './app.component';
import { MortalComponent } from './gauges/mortal.component';
import { WoundedComponent } from './gauges/wounded.component';
import { AccidentsService } from './services/accidents.service';

@NgModule({
  declarations: [
    AppComponent,
    MortalComponent,
    WoundedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxGaugeModule
  ],
  providers: [AccidentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
