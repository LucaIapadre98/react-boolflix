import { useSearch } from "../../contents/Context"
import ProductionCard from "./ProductionCard";

export default function ProductionList () {
    const { movies} = useSearch();

    return(
        <section>
            {movies.map((movie) => ( <ProductionCard key={movie.id} movie={movie}/> ))}
        </section>
    )
}