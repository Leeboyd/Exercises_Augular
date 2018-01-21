import { Component, Input, OnInit } from '@angular/core'
import { BeerService } from '@app/Service/beer.service'

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent implements OnInit {
  @Input() newName: string;
  title: string = 'List of Stock';
  stocks: object[] = [{name: 'Edward'}, {name:'Paul'}, {name:'Holister'}]
  beers: object[]
  constructor(private beerService : BeerService) {
    
  }
  ngOnInit () {
    this.getBeer()
  }

  getBeer () {
    this.beerService.api_getBeer()
    .subscribe(
      data => this.beers = data,
      error => console.log(error)
    )
  }

  postBeer (newKey: string) {
    console.log(newKey, this.newName)
    // this.beerService.api_postBeer(newKey, newName).subscribe()
  }
  


}