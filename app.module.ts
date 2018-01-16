import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { StockComponent } from './stockModule/stock.component'
import { BindingComponent } from './bindingModule/binding.component'

// Directive
import { HighlightDirective } from './Directive/highlight.directive'

// Service
import { StockService } from './Service/stock.service';

// Pipe
import { DateFormatterPipe } from './Pipe/date-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    BindingComponent,
    HighlightDirective,
    DateFormatterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
