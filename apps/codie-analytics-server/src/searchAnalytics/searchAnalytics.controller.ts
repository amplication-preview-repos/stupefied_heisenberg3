import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SearchAnalyticsService } from "./searchAnalytics.service";
import { SearchAnalyticsControllerBase } from "./base/searchAnalytics.controller.base";

@swagger.ApiTags("searchAnalytics")
@common.Controller("searchAnalytics")
export class SearchAnalyticsController extends SearchAnalyticsControllerBase {
  constructor(protected readonly service: SearchAnalyticsService) {
    super(service);
  }
}
