import { ProductSearchPayload } from "./ProductSearchPayload";

export interface ProductPayload extends ProductSearchPayload {
    name: String;
    category: String;
    price: Number;
    currency: Currency;
    longDescription: String;
    shortDescription: String;
}

enum Currency { INR, USD, EUR, YEN, AUD, GBP, KWD }