import { Component } from '@angular/core'
import { StockService } from '@app/Service/stock.service'

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent {
  title: string = 'List of Stock';
  stocks
  constructor(stockService : StockService) {
    this.stocks = stockService.getStock()
  }
}