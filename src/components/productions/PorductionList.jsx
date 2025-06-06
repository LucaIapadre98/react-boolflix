import { useSearch } from "../../contents/Context"

export default function ProductionList () {
    const { movies} = useSearch();

    return(
        <section>
            {movies.map((movie) => (
                <div className="card" key={movie.id}>
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
        </section>
    )
}