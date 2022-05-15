import './styles.css';
import axios from 'axios';

function Albums({ albuns, updateScreen = false }) {

  function deleteAlbum(id) {
    axios.delete(`https://tiao.supliu.com.br/api/album/${id}`, {
      headers: {
        "Authorization": "lopes.eric051@gmail.com"
      }
    }).then(response => window.location.reload());
  }

  function deleteTrack(id) {
    axios.delete(`https://tiao.supliu.com.br/api/track/${id}`, {
      headers: {
        "Authorization": "lopes.eric051@gmail.com"
      }
    }).then(response => window.location.reload());
  }

  return (
    <div className="albums-container">
      {albuns.map(album => (
        <div key={album.id} className="album">
          <strong>
            {`Álbum: ${album.name}, ${album.year}`}
            {updateScreen && <a onClick={() => deleteAlbum(album.id)}><img className="remove-album" src="./assets/trash.png" /></a>}
          </strong>
          <div className='tracks'>
            <table>
              <thead>
                <tr>
                  <th>Nº</th>
                  <th>Faixa</th>
                </tr>
              </thead>
              <tbody>
                {album.tracks.map(track => (
                  <tr key={track.id}>
                    <td>{track.number}</td>
                    <td>{track.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <table>
              <thead>
                <tr>
                  <th>Duração</th>
                  {updateScreen && <th>Remover</th>}
                </tr>
              </thead>
              <tbody>
                {album.tracks.map(track => (
                  <tr key={track.duration}>
                    <td>{`${Math.floor(track.duration / 60)}:${Math.round(track.duration % 60) > 9 ? Math.round(track.duration % 60) : "0" + Math.round(track.duration % 60)}`}</td>
                    {updateScreen && <td className="remove-track"><a onClick={() => deleteTrack(track.id)}><img src="./assets/delete.png" alt="delete" /></a></td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Albums;