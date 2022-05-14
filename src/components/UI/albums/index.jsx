import './styles.css';

function Albums({ albuns }) {
  return (
    <div className="albums-container">
      {albuns.map(album => (
        <div className="album">
          <strong>Álbum: {album.name}, {album.year}</strong>
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
                  <tr>
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
                </tr>
              </thead>
              <tbody>
                {album.tracks.map(track => (
                  <tr>
                    <td>{track.duration}</td>
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