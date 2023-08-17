import * as graphql from "@nestjs/graphql";
import { ProductimageResolverBase } from "./base/productimage.resolver.base";
import { Productimage } from "./base/Productimage";
import { ProductimageService } from "./productimage.service";

@graphql.Resolver(() => Productimage)
export class ProductimageResolver extends ProductimageResolverBase {
  constructor(protected readonly service: ProductimageService) {
    super(service);
  }
}
