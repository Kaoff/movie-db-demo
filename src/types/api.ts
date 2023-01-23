import { Movie } from "./movies";

export interface MovieSearchResult {
    page: number;
    results: Movie[];
}