import useSWR from 'swr';
import { QueryParams } from '../types/Query';

const baseUrl = import.meta.env.VITE_MOVIE_DB_API_URL || '';
const swrFetcher = (url: string, query?: QueryParams) => fetch(`${baseUrl}${url}?` + new URLSearchParams({
    ...query,
    api_key: import.meta.env.VITE_API_KEY || '',
})).then((res) => res.json());

const useMovieAPI = <T extends QueryParams>(url: string, query?: T) => {
    return useSWR(url, (url) => swrFetcher(url, query)); 
}

export default useMovieAPI;