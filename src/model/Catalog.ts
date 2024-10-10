import { CatalogSearchPayload } from "./CatalogSearchPayload";
import { Product } from "./Product";

export class Catalog extends CatalogSearchPayload {
    constructor(
        private id: Number,
        name: String,
        activeDate: Date,
        totalItems: Number,
        private products: Product[]
    ) {
        super(name, activeDate, totalItems);
    }

    get getId(): Number {
        return this.id;
    }

    get getProducts(): Product[] {
        return this.products;
    }
}