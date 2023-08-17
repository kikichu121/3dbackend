/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProductimageService } from "../productimage.service";
import { ProductimageCreateInput } from "./ProductimageCreateInput";
import { ProductimageWhereInput } from "./ProductimageWhereInput";
import { ProductimageWhereUniqueInput } from "./ProductimageWhereUniqueInput";
import { ProductimageFindManyArgs } from "./ProductimageFindManyArgs";
import { ProductimageUpdateInput } from "./ProductimageUpdateInput";
import { Productimage } from "./Productimage";

export class ProductimageControllerBase {
  constructor(protected readonly service: ProductimageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Productimage })
  async create(
    @common.Body() data: ProductimageCreateInput
  ): Promise<Productimage> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        image: true,
        singletone: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Productimage] })
  @ApiNestedQuery(ProductimageFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Productimage[]> {
    const args = plainToClass(ProductimageFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        image: true,
        singletone: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Productimage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: ProductimageWhereUniqueInput
  ): Promise<Productimage | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        image: true,
        singletone: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Productimage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: ProductimageWhereUniqueInput,
    @common.Body() data: ProductimageUpdateInput
  ): Promise<Productimage | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          image: true,
          singletone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Productimage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: ProductimageWhereUniqueInput
  ): Promise<Productimage | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          image: true,
          singletone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
