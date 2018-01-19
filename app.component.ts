import { Component } from '@angular/core';

export function ReadOnly(defaultValue) {
  return (target, key: string) => {
      target[key] = defaultValue;
      Object.defineProperty(target, key, { writable: false });
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ReadOnly('MABOW GATE')
  comment: string
  title: string
  constructor() { }
  change (msg: string) {
    console.log(msg)
    this.comment = 'NOTEST'
  }
}
