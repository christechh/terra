export interface PageResponseRODTO<T, K> {
  list: T[];
  limit: string | number;
  page: string | number;
  total: string | number;
  version: number;
  filter: K;
  showDetail: boolean;
  selectId: number;
  detail: T;
  detailVersion: number;
  extraData?: any;
  selectedExtraIdx?: number;
  recordLimit?: number;
}

export interface PageParams {
  limit: number;
  page: number;
  sort?: string | null;
  order?: string | null;
  title?: string | null;
}

export interface PageFilter {
  id: string | null;
  sort?: string | null;
  order?: string | null;
  title?: string | null;
}
