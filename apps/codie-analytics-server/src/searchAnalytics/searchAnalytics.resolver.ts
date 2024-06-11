import * as graphql from "@nestjs/graphql";
import { SearchAnalyticsResolverBase } from "./base/searchAnalytics.resolver.base";
import { SearchAnalytics } from "./base/SearchAnalytics";
import { SearchAnalyticsService } from "./searchAnalytics.service";

@graphql.Resolver(() => SearchAnalytics)
export class SearchAnalyticsResolver extends SearchAnalyticsResolverBase {
  constructor(protected readonly service: SearchAnalyticsService) {
    super(service);
  }
}
