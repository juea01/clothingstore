import {Injectable} from "@angular/core";
import {Product} from "./product.model";
import {RestDataSource} from "./rest.datasource";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ProductRepository {
  private products: Product[] = [];
  private product: Product;


  constructor(private dataSource: RestDataSource) {
    dataSource.getProduct().subscribe(data => {
       this.product = data;
    });
 }




  getProduct(): Observable<Product>{
    return new Observable(observer => {
      if (this.product == null ) {
       this.dataSource.getProduct().subscribe(data => {
        observer.next(this.product);
        observer.complete();
       });
      } else {
        observer.next(this.product);
        observer.complete();
      }
    });
  }

}
