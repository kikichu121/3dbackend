/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Productimage } from "@prisma/client";

export class ProductimageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProductimageCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductimageCountArgs>
  ): Promise<number> {
    return this.prisma.productimage.count(args);
  }

  async findMany<T extends Prisma.ProductimageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductimageFindManyArgs>
  ): Promise<Productimage[]> {
    return this.prisma.productimage.findMany(args);
  }
  async findOne<T extends Prisma.ProductimageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductimageFindUniqueArgs>
  ): Promise<Productimage | null> {
    return this.prisma.productimage.findUnique(args);
  }
  async create<T extends Prisma.ProductimageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductimageCreateArgs>
  ): Promise<Productimage> {
    return this.prisma.productimage.create<T>(args);
  }
  async update<T extends Prisma.ProductimageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductimageUpdateArgs>
  ): Promise<Productimage> {
    return this.prisma.productimage.update<T>(args);
  }
  async delete<T extends Prisma.ProductimageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductimageDeleteArgs>
  ): Promise<Productimage> {
    return this.prisma.productimage.delete(args);
  }
}
