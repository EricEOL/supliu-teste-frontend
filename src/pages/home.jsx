import { useEffect, useState } from "react";
import axios from 'axios';

import Window from "../components/UI/window";
import Wrapper from "../components/UI/wrapper";
import SearchBar from "../components/UI/searchbar";
import Albums from "../components/UI/albums";
import Loading from "../components/UI/Loading";

function Home() {

  const [albumsData, setAlbumsData] = useState([]);
  const [screenReady, setScreenReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setScreenReady(true);
    }, 4000)
  })

  useEffect(() => {
    axios.get("https://tiao.supliu.com.br/api/album", {
      headers: {
        "Authorization": "lopes.eric051@gmail.com"
      }
    }).then(result => {
      setAlbumsData(result.data);
      console.log(result.data)
    });
  },[]);

  return (
    <Wrapper>
      {screenReady === false && <Loading />}
      <Window title="Discografia">
        <SearchBar />
        {screenReady && <Albums albuns={albumsData.data}/> }
      </Window>
    </Wrapper>
  )
}

export default Home;