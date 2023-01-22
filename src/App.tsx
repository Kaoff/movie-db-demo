import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import useMovieList from './hooks/useMovieList';

const App = () => {
  const { data, isLoading, error } = useMovieList('Back to the future');

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ChakraProvider>
    </ChakraProvider>
  )
}

export default App
