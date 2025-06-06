import axios from "axios";
import { useState } from "react";

const apiUrl="https://api.themoviedb.org/3"
const apiKey= "63f98dc4b840e55db5609ed318833f2b";
const language="it-IT";

export default function App(){
  const [searched, setSearched] = useState("");
  const [movies, setMovies] = useState ([]);

  const handleInputChange = (e) => {
      setSearched(e.target.value);
  }

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const search = {
      api_key: apiKey,
      query: searched,
      language,
    }
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
  return (
    <div>
      <header>
        <form onSubmit={onSearchSubmit}>
          <input type="text" value={searched} onChange={handleInputChange}></input>
          <button>Clicca</button>
        </form>
      </header>
      <main>
        {movies.map((movie) => (
          <div className="card">
            <div className="card-header">
              <h4>Title: {movie.title}</h4>
              <h6>Titolo originale: {movie.originalTitle}</h6>
            </div>
            <div className="card-body">
              <p>Lingua: {movie.language}</p>
              <p>Voto: {movie.rating}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}