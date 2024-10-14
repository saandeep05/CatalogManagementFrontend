import { ProductPayload } from "./ProductPayload";

export interface Product extends ProductPayload {
    id: Number;
    deletedAt: Date;
}