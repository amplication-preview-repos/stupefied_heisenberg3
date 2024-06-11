import { Module } from "@nestjs/common";
import { SearchAnalyticsModuleBase } from "./base/searchAnalytics.module.base";
import { SearchAnalyticsService } from "./searchAnalytics.service";
import { SearchAnalyticsController } from "./searchAnalytics.controller";
import { SearchAnalyticsResolver } from "./searchAnalytics.resolver";

@Module({
  imports: [SearchAnalyticsModuleBase],
  controllers: [SearchAnalyticsController],
  providers: [SearchAnalyticsService, SearchAnalyticsResolver],
  exports: [SearchAnalyticsService],
})
export class SearchAnalyticsModule {}
