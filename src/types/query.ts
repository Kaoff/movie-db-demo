export interface SearchQueryParams {
    query?: string;
}

export interface MovieQueryParams {
    id: string;
}

export type QueryParams = SearchQueryParams | MovieQueryParams;