/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductimageWhereInput } from "./ProductimageWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProductimageOrderByInput } from "./ProductimageOrderByInput";

@ArgsType()
class ProductimageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProductimageWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProductimageWhereInput, { nullable: true })
  @Type(() => ProductimageWhereInput)
  where?: ProductimageWhereInput;

  @ApiProperty({
    required: false,
    type: [ProductimageOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProductimageOrderByInput], { nullable: true })
  @Type(() => ProductimageOrderByInput)
  orderBy?: Array<ProductimageOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProductimageFindManyArgs as ProductimageFindManyArgs };
