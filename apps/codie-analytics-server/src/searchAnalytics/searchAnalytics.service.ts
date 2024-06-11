import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SearchAnalyticsServiceBase } from "./base/searchAnalytics.service.base";

@Injectable()
export class SearchAnalyticsService extends SearchAnalyticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
