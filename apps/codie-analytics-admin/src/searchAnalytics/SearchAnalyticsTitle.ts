import { SearchAnalytics as TSearchAnalytics } from "../api/searchAnalytics/SearchAnalytics";

export const SEARCHANALYTICS_TITLE_FIELD = "id";

export const SearchAnalyticsTitle = (record: TSearchAnalytics): string => {
  return record.id?.toString() || String(record.id);
};
