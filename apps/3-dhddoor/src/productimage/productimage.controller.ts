import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductimageService } from "./productimage.service";
import { ProductimageControllerBase } from "./base/productimage.controller.base";

@swagger.ApiTags("productimages")
@common.Controller("productimages")
export class ProductimageController extends ProductimageControllerBase {
  constructor(protected readonly service: ProductimageService) {
    super(service);
  }
}
