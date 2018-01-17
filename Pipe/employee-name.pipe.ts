import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '@app/Class/employee'

@Pipe({
  name: 'employeeName'
})
export class EmployeeNamePipe implements PipeTransform {

  transform(value: Employee, args?: any): any {
    return `My Name is: ${value.firstName} ${value.lastName}, Money: ${value.salary}`;
  }

}
