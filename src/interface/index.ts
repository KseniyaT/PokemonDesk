export interface IStateRequest<T> {
  isLoading: boolean;
  data: T[] | null;
  error: object | null;
}

export interface IQuery {
  name?: string;
  limit?: number | string;
  offset?: number | string;
  types?: (string | number)[];
  [key: string]: any;
}

export interface IFilter {
  types?: (string | number)[];
  [key: string]: any;
}
