import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductimageServiceBase } from "./base/productimage.service.base";

@Injectable()
export class ProductimageService extends ProductimageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
