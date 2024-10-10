export class ProductSearchPayload {
    constructor(private _name: String) {}

    get getName(): String {
        return this._name;
    }
}