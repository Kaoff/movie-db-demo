import { Input, Flex, Text, Stack, Button } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import useMovieAPI from '../hooks/useMovieAPI';
import { SearchQueryParams } from '../types/query';
import { MediaSearch } from '../types/api';
import MediaList from '../containers/MediaList';
import { useParams, useNavigate } from 'react-router-dom';
import MediaListContext from '../context/MediaListContext';
import { MediaType } from '../types/medias';
import { toNumber } from 'lodash';

const Search: React.FC = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>(query || '');
  const { setMedias } = useContext(MediaListContext);

  const { data, isLoading, error } = useMovieAPI<SearchQueryParams, MediaSearch>('/search/multi', {
    query,
  });

  useEffect(() => {
    setMedias(data?.results || []);
  }, [data]);

  const onPressEnter: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== "Enter") return;
    onButtonClick();
  }

  const onButtonClick = () => {
    navigate(`/search/${inputValue}`);
    window.location.reload();
  }

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setInputValue(e.target.value);

  return (
      <Flex direction='column' justifyContent="center" alignItems="center">
        <Stack w='90%'>
          <Text fontSize="3xl">The Movie DB Api Demonstration</Text>
          <Flex direction='row'>
            <Input onKeyDown={onPressEnter} placeholder="Search for movies or TV shows..." id="search-bar" aria-label="search" value={inputValue} onChange={onInputChange} roundedRight='none' />
            <Button onClick={onButtonClick} roundedLeft='none'>Search</Button>
          </Flex>
          { isLoading && <p>Loading...</p> }
          { data && data.results.length > 0 && <MediaList query={query} /> }
          { error && <p>Error !</p>}
        </Stack>
      </Flex>
  )
}

export default Search;
