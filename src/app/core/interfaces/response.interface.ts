export interface IListResponseInterface {
  data: any;
  meta: IMeta;
  links: ILinks;
  extra_data: any;
}

interface IMeta {
  count: number;
  total_count: number;
  total_pages: number;
  filters: IFilters
}

interface IFilters {
  option_types: any[];
  product_properties: any[];
}

interface ILinks {
  self: string;
  next: string;
  prev: string;
  last: string;
  first: string;
}

export interface IDetailsResponse {
  data: any;
  extra_data: any;
}
