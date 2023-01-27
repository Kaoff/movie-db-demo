# The Movie DB API Demonstration

## How to install

*   Checkout the repo
    ```
    git checkout https://github.com/Kaoff/movie-db-demo.git
    ```

*   Install dependencies
    ```
    pnpm install
    ```
    (yarn and npm work too)

*   Set .env variables : Copy/paste the .env.dist file and provide the `VITE_API_KEY` variable
    ```
    VITE_API_KEY=/* Your API Key */
    VITE_MOVIE_DB_API_URL=https://api.themoviedb.org/3
    ```

*   Build the application with `pnpm build`

*   Open the preview with `pnpm preview`