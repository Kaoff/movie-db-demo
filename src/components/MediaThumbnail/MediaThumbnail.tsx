import { Box, Image, Text } from '@chakra-ui/react';
import noImage from '../../assets/No_Image_Available.jpeg';

interface MediaThumbnailProps {
    thumbnail?: string;
    title: string;
}

const MediaThumbnail: React.FC<MediaThumbnailProps> = ({ thumbnail, title }) => {
    return (
        <Box borderWidth={1} shadow="lg" w={200} rounded="lg">
            <Image alt={`Image of ${title}`} objectFit="cover" h={300} src={thumbnail} roundedTop="lg" fallbackSrc={noImage} />
            <Text whiteSpace="nowrap" fontSize={12} textOverflow="ellipsis" overflow="hidden" padding={2} align="center">{title}</Text>
        </Box>
    )
}

export default MediaThumbnail;