import axios from "axios";
import { useEffect, useState } from "react";

export default function Main(){
    const [characters, setCharacters] = useState([]);
    const apiUrl="https://api.themoviedb.org/3"
    const apiKey= "63f98dc4b840e55db5609ed318833f2b";
    const query="Harry";

    const fetchCharacters = () => {
        axios.get(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}`).then((res)=>{
            const{ results } = res.data;

            const normalizedcharacters = results.map((character)=>{
                const { original_language, original_title, title, vote_average} = character;
                return { original_language, original_title, title, vote_average};
            });
            setCharacters(normalizedcharacters);
        });
    }
    useEffect(fetchCharacters, []);

    return (
        <>
            <div className="container-form">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Button</button>
                </form>
            </div>
            <div className="container-card">
                {characters ? (
                    <div className="card">
                        {characters.map((character) =>(
                            <>
                                <div className="card-header" key={character.id}>
                                    <h3>{character.title}</h3>
                                    <h6>{character.original_title}</h6>
                                </div>
                                <div className="card-body">
                                    <span>{character.original_language}</span>
                                    <p>{character.vote_average}</p>
                                </div>
                            </>
                        ))}
                        
                    </div>
                ) : (
                    <h3>Loading...</h3>
                )}
               
            </div>
        </>
    )
}