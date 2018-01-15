import { Injectable } from '@angular/core'

@Injectable()
export class StockService{

  getStock() {
    return [{name: 'Edward'}, {name:'Paul'}, {name:'Holister'}]
  }

}