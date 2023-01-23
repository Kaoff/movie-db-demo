import useSWR from 'swr';
import { Movie } from '../types/movies';
import { QueryParams } from '../types/query';

const baseUrl = import.meta.env.VITE_MOVIE_DB_API_URL || '';
const swrFetcher = <T = unknown>(url: string, query?: QueryParams): Promise<T> => fetch(`${baseUrl}${url}?` + new URLSearchParams({
    ...query,
    api_key: import.meta.env.VITE_API_KEY || '',
})).then((res) => res.json());

const useMovieAPI = <T extends QueryParams, K =  unknown>(url: string, params?: T) => {
    return useSWR(url, (url) => swrFetcher<K>(url, params)); 
}

export default useMovieAPI;