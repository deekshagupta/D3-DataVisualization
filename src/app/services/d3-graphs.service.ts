import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
@Injectable()
export class D3GraphsService {

  constructor(private http: Http) { }

  getD3GraphsData() {
    return this.http.get('./assets/data.json').map(res => res.json());
  }
}