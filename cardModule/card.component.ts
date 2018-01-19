import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input('data') house: any

  constructor () {

  }

  ngOnInit () {
    console.log(this.house)
  }
}

