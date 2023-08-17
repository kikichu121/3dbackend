import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type ProductimageWhereInput = {
  id?: StringFilter;
  image?: JsonFilter;
  singletone?: BooleanFilter;
};
