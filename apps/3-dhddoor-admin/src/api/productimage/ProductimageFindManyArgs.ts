import { ProductimageWhereInput } from "./ProductimageWhereInput";
import { ProductimageOrderByInput } from "./ProductimageOrderByInput";

export type ProductimageFindManyArgs = {
  where?: ProductimageWhereInput;
  orderBy?: Array<ProductimageOrderByInput>;
  skip?: number;
  take?: number;
};
