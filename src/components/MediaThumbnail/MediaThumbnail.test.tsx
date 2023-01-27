import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import MediaThumbnail from './MediaThumbnail';

describe('<MediaThumbnail />', () => {
    it('should render a box with media title', () => {
        const title = "Testing movie";

        const { getByText } = render(<MediaThumbnail title={title} />);

        expect(getByText(/Testing movie/i)).toBeDefined();
    });
});