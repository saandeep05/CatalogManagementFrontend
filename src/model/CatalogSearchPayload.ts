import { CatalogPayload } from "./CatalogPayload";

export interface CatalogSearchPayload extends CatalogPayload {
    startDate: Date;
    endDate: Date;
}