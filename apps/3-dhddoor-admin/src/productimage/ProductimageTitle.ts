import { Productimage as TProductimage } from "../api/productimage/Productimage";

export const PRODUCTIMAGE_TITLE_FIELD = "id";

export const ProductimageTitle = (record: TProductimage): string => {
  return record.id || String(record.id);
};
