import { CatalogPayload } from "./CatalogPayload";

export class CatalogSearchPayload extends CatalogPayload {
    constructor(
        name: String,
        private activeDate: Date,
        private totalItems: Number
    ) {
        super(name);
    }

    get getActiveDate(): Date {
        return this.activeDate;
    }

    get getTotalItems(): Number {
        return this.totalItems;
    }
}