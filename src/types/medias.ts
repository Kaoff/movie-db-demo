export enum MediaType {
    TV = 'tv',
    MOVIE = 'movie',
    PERSON = 'person',
}

export interface MediaDetails {

}

export interface Media {
    media_type: MediaType,
    poster_path: string;
    name?: string;
    title?: string;
}

export interface MediaContextState {
    medias: Media[],
    setMedias: (medias: Media[]) => void;
}
