import './styles.css';
import axios from 'axios';
import Window from "../../components/UI/window";
import Wrapper from "../../components/UI/wrapper";
import Input from '../../components/UI/input';
import FormButtons from '../../components/UI/formButtons';
import { useState } from 'react';

function CreateTrack() {

  const [albumId, setAlbumId] = useState();
  const [number, setNumber] = useState();
  const [title, setTitle] = useState();
  const [duration, setDuration] = useState();
  const [response, setResponse] = useState(null);

  function submit(event) {
    event.preventDefault();

    if(albumId > 0 && number > 0 && title !== "" && duration > 0) {

      const newTrack = {
        album_id: albumId,
        number,
        title,
        duration
      }

      axios.post("https://tiao.supliu.com.br/api/track", newTrack, {
        headers: {
          "Authorization": "lopes.eric051@gmail.com"
        }
      })
      .then(response => response.status === 200 && setResponse("Nova faixa criada com sucesso"))
      .catch(err => {
        setResponse("Desculpe, houve um problema e não foi possível incluir essa faixa. Você pode ter errado o id do álbum ou colocado um nome já existente.");
      });
    }
  }

  return (
    <Wrapper>
      <Window title="Nova Faixa">
        <form className="form-new-album" onSubmit={submit}>
          <Input name="Id do Álbum" type="number" placeholder="Ex: 287" onChange={(event) => setAlbumId(event.target.value)}/>
          <Input name="Nº da Faixa" type="number" placeholder="Ex: 3" onChange={(event) => setNumber(event.target.value)}/>
          <Input name="Nome" type="text" placeholder="Ex: Alma de Boêmio" onChange={(event) => setTitle(event.target.value)}/>
          <Input name="Duration" type="number" placeholder="Ex: Duração da música em segundos" onChange={(event) => setDuration(event.target.value)}/>
          <FormButtons />
        </form>
        {response !== null && <p className="response">{response}</p>}
      </Window>
    </Wrapper>
  )
}

export default CreateTrack;