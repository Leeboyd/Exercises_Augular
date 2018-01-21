import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { routing } from './app.routing'
// Third-party

// Component
import { AppComponent } from './app.component';
import { StockComponent } from './stockModule/stock.component'
import { BindingComponent } from './bindingModule/binding.component'
import { EmployeeComponent } from './employeeModule/employee.component'
import { CribListingComponent } from './cribModule/crib-listing.component'
import { CardComponent } from './cardModule/card.component'

// Directive
import { HighlightDirective } from './Directive/highlight.directive'

// Service
import { StockService } from './Service/stock.service';
import { BeerService } from './Service/beer.service';

// Pipe
import { DateFormatterPipe } from './Pipe/date-formatter.pipe';
import { EmployeeNamePipe } from './Pipe/employee-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    BindingComponent,
    EmployeeComponent,
    CardComponent,
    HighlightDirective,
    DateFormatterPipe,
    EmployeeNamePipe,
    CribListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,   
    routing,
    HttpModule
  ],
  providers: [
    StockService,
    BeerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
