import { createContext, useContext, useState } from "react";

const Context = createContext();

const apiUrl="https://api.themoviedb.org/3"
const apiKey= "63f98dc4b840e55db5609ed318833f2b";
const language="it-IT";


const SearchProvider = ({children}) => {
    const [movies, setMovies] = useState([]);

    const search = (searched) => {
        const search = {
            api_key: apiKey,
            query: searched,
            language,
        };
        const queryParams = new URLSearchParams(search).toString();

        axios.get(`${apiUrl}/search/movie?${queryParams}`).then((res)=>{
            const resultMovies = res.data.results.map((movie)=> ({
                id: movie.id,
                title: movie.title,
                originalTitle: movie.original_title,
                rating: movie.vote_average,
                language: movie.original_language
            }));
      
                setMovies(resultMovies);
        });
    }
    const searchValues = {
        movies,
        search

    };
    return (
        <Context.Provider value={searchValues}>
            {children}
        </Context.Provider>
    );
};

const useSearch = () => {
    return useContext(Context);
};

export { SearchProvider, useSearch };