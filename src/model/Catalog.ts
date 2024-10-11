import { CatalogPayload } from "./CatalogPayload";
import { Product } from "./Product";

export interface Catalog extends CatalogPayload {
    id: String;
    activeDate: Date;
    totalItems: Number;
    products?: Product[];
}