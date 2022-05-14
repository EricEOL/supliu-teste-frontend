import "./styles.css";

function SearchBar() {
  return (
    <div className="container-searchbar">
      <span>Digite uma palavra chave</span>
      <div className="search-bar">
        <input type="text" />
        <button>Procurar</button>
      </div>
    </div>
  )
}

export default SearchBar;