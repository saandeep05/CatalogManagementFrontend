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
}