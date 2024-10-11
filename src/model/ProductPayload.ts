import { ProductSearchPayload } from "./ProductSearchPayload";

export interface ProductPayload extends ProductSearchPayload {
    name: String;
    category: String;
    price: String;
    catalog: Number;
    longDescription: String;
    shortDescription: String;
}