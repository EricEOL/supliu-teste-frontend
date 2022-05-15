import { useEffect, useState } from "react";
import axios from "axios";

import Albums from "../../components/UI/albums";
import SearchBar from "../../components/UI/searchbar";
import Window from "../../components/UI/window";
import Wrapper from "../../components/UI/wrapper";

import './styles.css';
import { Link } from "react-router-dom";

function UpdateAlbums() {

  const [screenReady, setScreenReady] = useState(false);
  const [albumsData, setAlbumsData] = useState([]);

  useEffect(() => {
    axios.get("https://tiao.supliu.com.br/api/album", {
      headers: {
        "Authorization": "lopes.eric051@gmail.com"
      }
    }).then(result => {
      setAlbumsData(result.data);
      setScreenReady(true);
    });
  }, []);

  return (
    <Wrapper>
      <Window title="Alterar Álbuns e Faixas">
        <SearchBar />
        <div className="create-buttons">
          <Link to="/createalbum">
            <button className="create-album">Novo Álbum</button>
          </Link>
          <Link to="/createtrack">
            <button className="create-track">Nova Faixa</button>
          </Link>
        </div>
        {screenReady && <Albums albuns={albumsData.data} updateScreen={true} />}
      </Window>
    </Wrapper>
  )
}

export default UpdateAlbums;