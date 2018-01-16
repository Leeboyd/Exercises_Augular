import { Component } from '@angular/core'
import * as moment from 'moment';

@Component({
  selector: 'formNow',
  templateUrl: './binding.component.html',
  // styleUrls: ['./stock.component.css']
})

export class BindingComponent {
  now = moment().format('YYYY-MM-DD');
}