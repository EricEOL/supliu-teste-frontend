import './styles.css';
import Window from "../../components/UI/window";
import Wrapper from "../../components/UI/wrapper";
import Input from '../../components/UI/input';
import FormButtons from '../../components/UI/formButtons';
import { useState } from 'react';
import axios from 'axios';

function CreateAlbum() {

  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [response, setResponse] = useState(null);

  function submit(event) {
    event.preventDefault();

    if(year > 0 && name !== "") {

      const newAlbum = {
        name,
        year
      }

      axios.post("https://tiao.supliu.com.br/api/album", newAlbum, {
        headers: {
          "Authorization": "lopes.eric051@gmail.com"
        }
      }).then(response => {
        response.status === 200 && setResponse("Novo álbum criado com sucesso");
      }).catch(err => {
        setResponse("Desculpe, houve um problema e não foi possível incluir esse álbum. Tente um nome diferente.");
      });
    }
  }

  return (
    <Wrapper>
      <Window title="Novo Álbum">
        <form className="form-new-album" onSubmit={submit}>
          <Input name="Nome" type="text" placeholder="Ex: Rei do Gado" onChange={(event) => setName(event.target.value)}/>
          <Input name="Ano" type="number" placeholder="Ex: 2002" onChange={(event) => setYear(event.target.value)}/>
          <FormButtons />
        </form>
        {response !== null && <p className="response">{response}</p>}
      </Window>
    </Wrapper>
  )
}

export default CreateAlbum;