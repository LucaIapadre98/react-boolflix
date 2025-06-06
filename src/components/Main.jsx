import ProductionList from "./productions/ProductionList";
import { useSearch } from "../contents/Context";

export default function Main (){
    const { movies } = useSearch();
    return (
        <main>
            <ProductionList production={movies} />
        </main>
    )
}