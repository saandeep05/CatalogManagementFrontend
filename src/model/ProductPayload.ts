import { Currency } from "../utils/Currency";
import { ProductSearchPayload } from "./ProductSearchPayload";

export interface ProductPayload extends ProductSearchPayload {
    name: String;
    category: String;
    price: Number;
    currency: Currency;
    longDescription: String;
    shortDescription: String;
}
