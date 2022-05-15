import "./styles.css";

function SearchBar({ onChange, onClick }) {
  return (
    <div className="container-searchbar">
      <span>Digite uma palavra chave</span>
      <div className="search-bar">
        <input type="text" onChange={onChange} placeholder="Ex: gado"/>
        <button onClick={onClick}>Procurar</button>
      </div>
    </div>
  )
}

export default SearchBar;