import axios from 'axios';
import { useEffect, useState } from 'react';
import Home from './pages/home';

function App() {

  const [albums, setAlbums] = useState();

  useEffect(() => {
    axios.get("https://tiao.supliu.com.br/api/album", {
      headers: {
        "Authorization": "lopes.eric051@gmail.com"
      }
    }).then(result => {
      setAlbums(result.data.data);
    });
  },[]);

  return (
    <div>
      <Home />
      {/*albums.map(album => (
        <h1>{album.id}</h1>
      ))*/}
    </div>
  );
}

export default App;
