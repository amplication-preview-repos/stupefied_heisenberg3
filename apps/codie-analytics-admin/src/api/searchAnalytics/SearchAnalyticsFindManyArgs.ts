import { SearchAnalyticsWhereInput } from "./SearchAnalyticsWhereInput";
import { SearchAnalyticsOrderByInput } from "./SearchAnalyticsOrderByInput";

export type SearchAnalyticsFindManyArgs = {
  where?: SearchAnalyticsWhereInput;
  orderBy?: Array<SearchAnalyticsOrderByInput>;
  skip?: number;
  take?: number;
};
