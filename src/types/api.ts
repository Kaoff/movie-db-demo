import { Media } from "./medias";

export interface MediaSearch {
    page: number;
    total_pages: number;
    results: Media[];
}

export interface Configuration {
    images: {
        backdrop_sizes: string[];
        base_url: string;
    }
}

export type MovieApiResult = MediaSearch | Configuration;