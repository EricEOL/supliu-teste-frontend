import { useEffect, useState } from "react";
import axios from 'axios';

import Window from "../components/UI/window";
import Wrapper from "../components/UI/wrapper";
import SearchBar from "../components/UI/searchbar";
import Albums from "../components/UI/albums";
import Loading from "../components/UI/Loading";

function Home() {
  const [loading, setLoading] = useState(true);
  const [screenReady, setScreenReady] = useState(false);

  const [albumsData, setAlbumsData] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  })

  useEffect(() => {
    axios.get("https://tiao.supliu.com.br/api/album", {
      headers: {
        "Authorization": "lopes.eric051@gmail.com"
      }
    }).then(result => {
      setAlbumsData(result.data);
      setScreenReady(true);
    });
  },[]);

  function searchAlbuns() {
    axios.get(`https://tiao.supliu.com.br/api/album?keyword=${keyword}&limit=10&page=1`, {
      headers: {
        "Authorization": "lopes.eric051@gmail.com"
      }
    }).then(result => setFilteredAlbums(result.data.data));
  }

  return (
    <Wrapper>
      {loading === true && <Loading />}
      <Window title="Discografia">
        <SearchBar onChange={(event) => setKeyword(event.target.value)} onClick={searchAlbuns}/>
        {screenReady && <Albums albuns={filteredAlbums.length > 0 ? filteredAlbums : albumsData.data}/> }
      </Window>
    </Wrapper>
  )
}

export default Home;