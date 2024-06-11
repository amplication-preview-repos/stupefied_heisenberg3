import { SearchQuery as TSearchQuery } from "../api/searchQuery/SearchQuery";

export const SEARCHQUERY_TITLE_FIELD = "id";

export const SearchQueryTitle = (record: TSearchQuery): string => {
  return record.id?.toString() || String(record.id);
};
