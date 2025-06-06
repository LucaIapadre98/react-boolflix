import { createContext, useContext, useState } from "react";
import axios from "axios";

import itFlag from "../assets/img/it.png";
import gbFlag from "../assets/img/gb.png";
import usFlag from "../assets/img/us.png";
import generalFlag from "../assets/img/general.png";

const Context = createContext();

const apiUrl="https://api.themoviedb.org/3"
const apiKey= "63f98dc4b840e55db5609ed318833f2b";
const language="it-IT";

const SearchProvider = ({children}) => {
    const [movies, setMovies] = useState([]);

    const FlagfromLang = (lang) => {
        if(lang === "it") return itFlag;
        if(lang === "en") return usFlag;
        if(lang === "gb") return gbFlag;
        return generalFlag;

    }

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
                language: movie.original_language,
                languageFlag: FlagfromLang(movie.original_language)
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