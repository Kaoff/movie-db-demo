export interface Movie {
    title: string;
}

export interface MoviesState {
    movies: Movie[];
    currentMovie?: Movie;
}
