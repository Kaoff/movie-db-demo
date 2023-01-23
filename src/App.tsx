import { ChakraProvider, Input } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import useMovieAPI from './hooks/useMovieAPI';
import { SearchQueryParams } from './types/query';
import { debounce } from 'lodash';
import { MovieSearchResult } from './types/api';

const App = () => {
  const [search, setSearch] = useState<string>('');

  const { data, isLoading, error, mutate } = useMovieAPI<SearchQueryParams, MovieSearchResult>('/search/multi', {
    query: search,
  });

  const debounceLoad = useCallback(debounce(mutate, 300), []);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debounceLoad();
  }

  return (
    <ChakraProvider>
        <Input value={search} onChange={onSearchChange} />
        { isLoading && <p>Loading...</p> }
        { data && data.results && <p>{data.results.map((r) => r.title)}</p> }
    </ChakraProvider>
  )
}

export default App
