import React from "react";
import { Configuration } from "../types/api";

const ApiConfigContext = React.createContext<Configuration | undefined>({
    images: {
        backdrop_sizes: [],
        base_url: '',
    },
});

export default ApiConfigContext;