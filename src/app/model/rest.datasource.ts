import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import { Product } from "./product.model";


@Injectable({
  providedIn: 'root'
})
export class RestDataSource{
  private baseUrl: string = "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product";

  constructor(private http: HttpClient) {

  }

  getProduct():Observable<Product> {
    return this.http.get<Product>(this.baseUrl);
  }
}
