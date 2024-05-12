import { Component, OnInit } from '@angular/core';
import {ProductRepository} from "../../model/product.repository";
import { Product } from '../../model/product.model';
import { Cart } from '../../model/cart.model';

@Component({
  selector: 'app-mystore',
  templateUrl: './mystore.component.html',
  styleUrls: ['./mystore.component.css']
})
export class MystoreComponent implements OnInit {

  product: Product = new Product();
  size: string;
  errorMessage: string;
  constructor(private repository: ProductRepository, private cart: Cart) { }

  ngOnInit(): void {
     this.repository.getProduct().subscribe(data => {
      this.product = data;
    });

  }

  selectSize(size: string) {
    this.size = size;
    this.errorMessage = "";
  }

  addToCart() {
    if (this.size == null) {
      this.errorMessage = "Please select one of the available sizes.";
    } else {
      this.cart.addLine(this.product, 1, this.size);
    }
  }

  getLines() {
    return this.cart.lines;
  }

}
