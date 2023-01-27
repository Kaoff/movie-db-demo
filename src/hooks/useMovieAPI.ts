import { useEffect, useState } from 'react';
import { MovieApiResult } from '../types/api';
import { QueryParams } from '../types/query';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_MOVIE_DB_API_URL || '';
const apiKey = import.meta.env.VITE_API_KEY || '';

const useMovieAPI = <T extends QueryParams | unknown, K extends MovieApiResult>(url: string, queryParams?: T) => {
    const [data, setData] = useState<K>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);

                const result = await axios(
                    `${baseUrl}${url}?` + new URLSearchParams({
                        ...(queryParams || {}),
                        api_key: apiKey,
                    }),
                );
    
                setData(result.data);
                setIsLoading(false);
            } catch (e: any) {
                setError(e);
            }
            
        };

        fetchData();
    }, []);

    return { data, isLoading, error };
}

export default useMovieAPI;