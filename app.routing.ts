import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockComponent } from '@app/stockModule/stock.component';
import { EmployeeComponent } from '@app/employeeModule/employee.component';
import { BindingComponent } from '@app/bindingModule/binding.component';

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
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)