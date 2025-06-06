export default function Header(){
    return (
        <header>
            <form onSubmit={onSearchSubmit}>
                <input type="text" value={searched} onChange={handleInputChange}></input>
                <button>Clicca</button>
            </form>
        </header>
    )
}