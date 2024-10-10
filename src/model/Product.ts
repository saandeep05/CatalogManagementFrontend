import { ProductPayload } from "./ProductPayload";

export class Product extends ProductPayload {
    constructor(private id: Number, name: String,
        category: String, price: Number,
        catalog: Number,
        longDescription?: String,
        shortDescription?: String,
    ) {
        super(name, category, price, catalog, longDescription, shortDescription);
    }

    get getId(): Number {
        return this.id;
    }
}