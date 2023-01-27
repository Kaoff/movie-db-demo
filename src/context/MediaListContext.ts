import React from "react";
import { Media, MediaContextState, MediaDetails } from "../types/medias";

const MediaListContext = React.createContext<MediaContextState>({
    medias: [],
    setMedias: (medias: Media[]) => {},
});

export default MediaListContext;