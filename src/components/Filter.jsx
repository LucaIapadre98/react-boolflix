import { useState } from "react";
import { useSearch } from "../contents/Context";
import axios from "axios";

const apiUrl="https://api.themoviedb.org/3"
const apiKey= "63f98dc4b840e55db5609ed318833f2b";
const language="it-IT";

export default function Filter () {
    const [searched, setSearched] = useState("");
    const { search }  = useSearch ();

    const handleInputChange = (e) => {
    setSearched(e.target.value);
    };

    const onSearchSubmit = (e) => {
        e.preventDefault();
        search(searched)
    };

    return (
        <form onSubmit={onSearchSubmit}>
            <input type="text" value={searched} onChange={handleInputChange}></input>
            <button>Clicca</button>
        </form>
    )
}