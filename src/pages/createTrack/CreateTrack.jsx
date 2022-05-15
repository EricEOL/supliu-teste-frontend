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
      }).then(response => console.log(response));
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
      </Window>
    </Wrapper>
  )
}

export default CreateTrack;