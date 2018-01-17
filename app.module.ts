import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

// Third-party

// Component
import { AppComponent } from './app.component';
import { StockComponent } from './stockModule/stock.component'
import { BindingComponent } from './bindingModule/binding.component'
import { EmployeeComponent } from './employeeModule/employee.component'

// Directive
import { HighlightDirective } from './Directive/highlight.directive'

// Service
import { StockService } from './Service/stock.service';

// Pipe
import { DateFormatterPipe } from './Pipe/date-formatter.pipe';
import { EmployeeNamePipe } from './Pipe/employee-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    BindingComponent,
    EmployeeComponent,
    HighlightDirective,
    DateFormatterPipe,
    EmployeeNamePipe
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
