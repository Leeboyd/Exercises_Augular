import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockComponent } from '@app/stockModule/stock.component';
import { EmployeeComponent } from '@app/employeeModule/employee.component';
import { BindingComponent } from '@app/bindingModule/binding.component';
import { CribListingComponent } from '@app/cribModule/crib-listing.component';
// import { FormComponent } from '@app/loginFormModule/simpleForm.component'
// import { FormComponent } from '@app/loginFormModule/complexForm.component'
import { FormComponent } from '@app/loginFormModule/validateForm.component'

const appRoutes: Routes = [
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'binding',
    component: BindingComponent
  },
  {
    path: 'loginform',
    component: FormComponent
  },
  {
    path: 'crib',
    component: CribListingComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)