import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import UpdateAlbums from './pages/updateAlbums/UpdateAlbums';
import CreateAlbum from './pages/createAlbum/CreateAlbum';
import CreateTrack from './pages/createTrack/CreateTrack';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/updatealbums" element={<UpdateAlbums />} />
        <Route path="/createalbum" element={<CreateAlbum />} />
        <Route path="/createtrack" element={<CreateTrack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
