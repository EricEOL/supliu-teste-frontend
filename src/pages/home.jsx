import { useEffect, useState } from "react";
import axios from 'axios';

import Window from "../components/UI/window";
import Wrapper from "../components/UI/wrapper";
import SearchBar from "../components/UI/searchbar";
import Albums from "../components/UI/albums";

function Home() {

  const [albumsData, setAlbumsData] = useState([]);

  useEffect(() => {
    axios.get("https://tiao.supliu.com.br/api/album", {
      headers: {
        "Authorization": "lopes.eric051@gmail.com"
      }
    }).then(result => {
      setAlbumsData(result.data);
      console.log(result.data.data)
    });
  },[]);

  return (
    <Wrapper>
      <Window title="Discografia">
        <SearchBar />
        {albumsData.data.length > 0 && <Albums albuns={albumsData.data} />}
      </Window>
    </Wrapper>
  )
}

export default Home;