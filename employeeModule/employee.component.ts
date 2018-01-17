import { Component } from '@angular/core'
import * as moment from 'moment';
import { Employee } from '@app/Class/employee'

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  // styleUrls: ['./stock.component.css']
})

export class EmployeeComponent {
  employee: Employee = new Employee('frost', 'jone', 100000)
}

