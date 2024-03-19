import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 private  readonly  _http = inject(HttpClient)

  getAllProducts():Observable<any> {
    return this._http.get('https://12fakestoreapi.com/products')
  }

}
