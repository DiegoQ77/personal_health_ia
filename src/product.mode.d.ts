// En el archivo 'product.model.d.ts'

declare module "./models/product.model" {
  import { Document } from "mongoose";

  interface Product {
    name: string;
    calories: number;
    sugar: number;
    img?: string;
  }

  export default Product;
}
