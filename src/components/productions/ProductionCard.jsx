export default function ProductionCard ({ movie }){
    return (
        <div className="card">
            <div className="card-header">
                <h3>Title: {movie.title}</h3>
                <h6>Titolo originale: {movie.originalTitle}</h6>
            </div>
            <div className="card-body">
                <p>Lingua: {movie.language}</p>
                <p>Bandiera: <img src={movie.languageFlag} /></p>
                <p>Voto: {movie.rating}</p>
            </div>
        </div>
    )
}