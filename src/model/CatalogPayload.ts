export class CatalogPayload {
    constructor(private name: String) {}

    get getName(): String {
        return this.name;
    }
}