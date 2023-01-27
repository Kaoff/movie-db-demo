import { MediaType } from '../types/medias';
import { Grid, Box, GridItem } from '@chakra-ui/react';
import MediaThumbnail from '../components/MediaThumbnail/MediaThumbnail';
import { useContext } from 'react';
import ApiConfigContext from '../context/ApiConfigContext';
import MediaListContext from '../context/MediaListContext';

interface MediaListProps {
    query?: string;
}

const MediaList: React.FC<MediaListProps> = ({ query }) => {
    const apiConfig = useContext(ApiConfigContext);
    const { medias } = useContext(MediaListContext);

    const getPosterFullUrl = (posterUrl?: string) => posterUrl ? `${apiConfig?.images.base_url}${apiConfig?.images.backdrop_sizes[0]}${posterUrl}` : undefined;

    const mediasToShow = medias.filter(media => media.media_type === MediaType.MOVIE || media.media_type === MediaType.TV);

    return (
        <Box id="media-list">
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                {
                    mediasToShow.map((media, index) => {
                        return (
                            <GridItem key={index}>
                                <MediaThumbnail thumbnail={getPosterFullUrl(media.poster_path)} title={media.title || media.name || 'NO TITLE PROVIDED'} />
                            </GridItem>
                        )
                    })
                }
            </Grid>
        </Box>
    );
}

export default MediaList;