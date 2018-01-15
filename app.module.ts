import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './stockModule/stock.component'

// Directive
import { HighlightDirective } from './Directive/highlight.directive'

// Service
import { StockService } from './Service/stock.service'

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
