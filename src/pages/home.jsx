import { useEffect, useState } from "react";
import axios from 'axios';

import Window from "../components/UI/window";
import Wrapper from "../components/UI/wrapper";
import SearchBar from "../components/UI/searchbar";
import Albums from "../components/UI/albums";
import Loading from "../components/UI/Loading";
import Pagination from "../components/UI/pagination";

function Home() {
  const [loading, setLoading] = useState(true);
  const [screenReady, setScreenReady] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [albumsData, setAlbumsData] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  })

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
      {loading === true && <Loading />}
      <Window title="Discografia">
        <SearchBar onChange={(event) => setKeyword(event.target.value)} onClick={searchAlbuns} />
        {screenReady && <Albums albuns={albumsData.data} />}
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

export default Home;