import { ChakraProvider } from '@chakra-ui/react';
import useMovieAPI from '../hooks/useMovieAPI';
import { Configuration } from '../types/api';
import ApiConfigContext from '../context/ApiConfigContext';
import { Outlet } from 'react-router-dom';
import MediaListContext from '../context/MediaListContext';
import { Media, MediaDetails } from '../types/medias';
import { useState } from 'react';

const Root = () => {
    const { data, isLoading, error } = useMovieAPI<unknown, Configuration>('/configuration');

    const [medias, setMedias] = useState<Media[]>([]);

    return (
        <ChakraProvider>
            <ApiConfigContext.Provider value={data}>
                <MediaListContext.Provider value={{ medias, setMedias }}>
                    <div id="root_layout">
                        {isLoading && <div>Loading application...</div>}
                        {error && <div>Couldn't load API configuration. Please try again.</div>}
                        {data && <Outlet />}
                    </div>
                </MediaListContext.Provider>
            </ApiConfigContext.Provider>
        </ChakraProvider>
    )
}

export default Root;
