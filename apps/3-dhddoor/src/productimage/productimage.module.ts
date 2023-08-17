import { Module } from "@nestjs/common";
import { ProductimageModuleBase } from "./base/productimage.module.base";
import { ProductimageService } from "./productimage.service";
import { ProductimageController } from "./productimage.controller";
import { ProductimageResolver } from "./productimage.resolver";

@Module({
  imports: [ProductimageModuleBase],
  controllers: [ProductimageController],
  providers: [ProductimageService, ProductimageResolver],
  exports: [ProductimageService],
})
export class ProductimageModule {}
