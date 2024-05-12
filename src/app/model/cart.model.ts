import { Injectable } from "@angular/core";
import { Product } from "./product.model";


@Injectable({
  providedIn: 'root'
})
export class Cart {
    public lines: CartLine[] = [];

    addLine(product: Product, quantity: number = 1, size: string) {
        let line = this.lines.find(line => line.size == size);
        if (line != undefined) {
            line.quantity += quantity;
        } else {
            this.lines.push(new CartLine(product, quantity,size ));
        }

    }

}

export class CartLine {

    constructor(public product: Product,
        public quantity: number, public size: string) {}

    get lineTotal() {
        return this.quantity * this.product.price;
    }
}
