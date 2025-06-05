import { useEffect  } from "react";
import axios from "axios";

export default function Main(){

    const apiUrl="https://api.themoviedb.org/3"
    const apiKey= "63f98dc4b840e55db5609ed318833f2b";
    const query="Harry";
    const apiParams= {api_key: apiKey, query};

    const queryString = new URLSearchParams(apiParams).toString();
    console.log(queryString);
    
    useEffect(() =>{
        axios.get(`${apiUrl}/search/movie?${queryString}`)
    })
    return (
        <div className="container-form">
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Button</button>
            </form>
        </div>
    );
}