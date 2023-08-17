/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateProductimageArgs } from "./CreateProductimageArgs";
import { UpdateProductimageArgs } from "./UpdateProductimageArgs";
import { DeleteProductimageArgs } from "./DeleteProductimageArgs";
import { ProductimageCountArgs } from "./ProductimageCountArgs";
import { ProductimageFindManyArgs } from "./ProductimageFindManyArgs";
import { ProductimageFindUniqueArgs } from "./ProductimageFindUniqueArgs";
import { Productimage } from "./Productimage";
import { ProductimageService } from "../productimage.service";
@graphql.Resolver(() => Productimage)
export class ProductimageResolverBase {
  constructor(protected readonly service: ProductimageService) {}

  async _productimagesMeta(
    @graphql.Args() args: ProductimageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Productimage])
  async productimages(
    @graphql.Args() args: ProductimageFindManyArgs
  ): Promise<Productimage[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Productimage, { nullable: true })
  async productimage(
    @graphql.Args() args: ProductimageFindUniqueArgs
  ): Promise<Productimage | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Productimage)
  async createProductimage(
    @graphql.Args() args: CreateProductimageArgs
  ): Promise<Productimage> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Productimage)
  async updateProductimage(
    @graphql.Args() args: UpdateProductimageArgs
  ): Promise<Productimage | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Productimage)
  async deleteProductimage(
    @graphql.Args() args: DeleteProductimageArgs
  ): Promise<Productimage | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}