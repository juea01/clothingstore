import { SizeOption } from "./sizeOption.model";

export class Product {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public price?: number,
    public imageURL?: string,
    public sizeOptions?: SizeOption[],
  ){}
}
