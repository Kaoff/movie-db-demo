import useSWR from 'swr';
import { SearchQueryParams } from '../types/Query';
import useMovieAPI from './useMovieAPI';

const useMovieList = (search?: string) => {
    const { data, error, isLoading } = useMovieAPI<SearchQueryParams>('/search/multi', {
        query: search,
    });

    return { data, error, isLoading };
}

export default useMovieList;