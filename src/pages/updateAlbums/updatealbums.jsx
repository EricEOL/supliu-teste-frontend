import { useEffect, useState } from "react";
import axios from "axios";

import Albums from "../../components/UI/albums";
import SearchBar from "../../components/UI/searchbar";
import Window from "../../components/UI/window";
import Wrapper from "../../components/UI/wrapper";
import Pagination from "../../components/UI/pagination";

import './styles.css';
import { Link } from "react-router-dom";

function UpdateAlbums() {

  const [screenReady, setScreenReady] = useState(false);
  const [albumsData, setAlbumsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios.get(`https://tiao.supliu.com.br/api/album?keyword=${keyword}&limit=10&page=${currentPage}`, {
      headers: {
        "Authorization": "lopes.eric051@gmail.com"
      }
    }).then(result => {
      setAlbumsData(result.data);
      setScreenReady(true);
    });
  }, [currentPage]);

  function searchAlbuns() {
    setCurrentPage(1);
    axios.get(`https://tiao.supliu.com.br/api/album?keyword=${keyword}&limit=10&page=1`, {
      headers: {
        "Authorization": "lopes.eric051@gmail.com"
      }
    }).then(result => setAlbumsData(result.data));
  }

  return (
    <Wrapper>
      <Window title="Alterar Álbuns e Faixas">
        <SearchBar onChange={(event) => setKeyword(event.target.value)} onClick={searchAlbuns}/>
        <div className="create-buttons">
          <Link to="/createalbum">
            <button className="create-album">Novo Álbum</button>
          </Link>
          <Link to="/createtrack">
            <button className="create-track">Nova Faixa</button>
          </Link>
        </div>
        {screenReady && <Albums albuns={albumsData.data} updateScreen={true} />}
        <Pagination
          previous={() => {
            setCurrentPage(currentPage - 1);
          }} 
          next={() => {
            setCurrentPage(currentPage + 1)
          }} 
          disabledPrevious={currentPage === 1} 
          disabledNext={currentPage === albumsData.last_page} 
        />
      </Window>
    </Wrapper>
  )
}

export default UpdateAlbums;