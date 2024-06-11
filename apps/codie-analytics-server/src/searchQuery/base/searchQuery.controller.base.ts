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
import { SearchQueryService } from "../searchQuery.service";
import { SearchQueryCreateInput } from "./SearchQueryCreateInput";
import { SearchQuery } from "./SearchQuery";
import { SearchQueryFindManyArgs } from "./SearchQueryFindManyArgs";
import { SearchQueryWhereUniqueInput } from "./SearchQueryWhereUniqueInput";
import { SearchQueryUpdateInput } from "./SearchQueryUpdateInput";

export class SearchQueryControllerBase {
  constructor(protected readonly service: SearchQueryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SearchQuery })
  async createSearchQuery(
    @common.Body() data: SearchQueryCreateInput
  ): Promise<SearchQuery> {
    return await this.service.createSearchQuery({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SearchQuery] })
  @ApiNestedQuery(SearchQueryFindManyArgs)
  async searchQueries(@common.Req() request: Request): Promise<SearchQuery[]> {
    const args = plainToClass(SearchQueryFindManyArgs, request.query);
    return this.service.searchQueries({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SearchQuery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async searchQuery(
    @common.Param() params: SearchQueryWhereUniqueInput
  ): Promise<SearchQuery | null> {
    const result = await this.service.searchQuery({
      where: params,
      select: {
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: SearchQuery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSearchQuery(
    @common.Param() params: SearchQueryWhereUniqueInput,
    @common.Body() data: SearchQueryUpdateInput
  ): Promise<SearchQuery | null> {
    try {
      return await this.service.updateSearchQuery({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: SearchQuery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSearchQuery(
    @common.Param() params: SearchQueryWhereUniqueInput
  ): Promise<SearchQuery | null> {
    try {
      return await this.service.deleteSearchQuery({
        where: params,
        select: {
          createdAt: true,
          id: true,
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