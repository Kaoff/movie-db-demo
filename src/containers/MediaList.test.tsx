import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import MediaList from './MediaList';
import { Media, MediaContextState, MediaType } from '../types/medias';
import MediaListContext from '../context/MediaListContext';

const mockContext: MediaContextState = {
    medias: [
        {
            media_type: MediaType.TV,
            poster_path: '',
            name: 'Super TV show',
        },
        {
            media_type: MediaType.MOVIE,
            poster_path: '',
            title: 'Super movie',
        },
        {
            media_type: MediaType.PERSON,
            poster_path: '',
            name: 'Super person',
        }
    ],
    setMedias: () => {},
}

describe('<MediaThumbnail />', () => {
    it('should render only movie and tv show', () => {
        const { getByText, queryByText } = render(
            <MediaListContext.Provider value={mockContext}>
                <MediaList />
            </MediaListContext.Provider>
        );

        expect(getByText(/Super TV show/i)).toBeDefined();
        expect(getByText(/Super movie/i)).toBeDefined();
        expect(queryByText(/Super person/i)).toBeFalsy();
    });

    it('should render a default title when not provided', () => {
        const newMediasMock: Media[] = [...mockContext.medias, {
            media_type: MediaType.MOVIE,
            poster_path: '',
        }];

        const newMock = { ...mockContext, medias: newMediasMock };

        const { getByText } = render(
            <MediaListContext.Provider value={newMock}>
                <MediaList />
            </MediaListContext.Provider>
        );

        expect(getByText(/NO TITLE PROVIDED/i)).toBeDefined();
    });
});