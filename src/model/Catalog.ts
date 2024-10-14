import { CatalogPayload } from "./CatalogPayload";
import { Product } from "./Product";

export interface Catalog extends CatalogPayload {
    id: Number;
    activeDate: Date;
    totalItems: Number;
    deletedAt: Date;
    products?: Product[];
}