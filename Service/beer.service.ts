import { Injectable } from '@angular/core'

import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx'

@Injectable()
export class BeerService{

  constructor (private http: Http) {

  }

  api_getBeer (): Observable<any> {
    return this.http.get("https://api.punkapi.com/v2/beers?page=1&per_page=5")
    .map( (res: Response) => {
      return res.json()
    })
    .catch( (error: any) => {
      return Observable.throw(error.json().error || 'Server Error')
    })
  }

}