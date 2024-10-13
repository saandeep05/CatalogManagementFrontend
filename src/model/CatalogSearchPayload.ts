import { CatalogPayload } from "./CatalogPayload";

export interface CatalogSearchPayload extends CatalogPayload {
    startDate: string;
    endDate: string;
}