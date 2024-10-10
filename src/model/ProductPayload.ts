import { ProductSearchPayload } from "./ProductSearchPayload";

export class ProductPayload extends ProductSearchPayload {
    constructor(name: String,
        private category: String, private price: Number,
        private catalog: Number,
        private longDescription?: String,
        private shortDescription?: String,
    ) {
        super(name);
    }

    get getCategory(): String {
        return this.category;
    }

    get getPrice(): Number {
        return this.price;
    }

    get getCatalog(): Number {
        return this.catalog;
    }

    get getLongDesc(): String|undefined {
        return this.longDescription;
    }

    get getShortDesc(): String|undefined {
        return this.shortDescription;
    }
}