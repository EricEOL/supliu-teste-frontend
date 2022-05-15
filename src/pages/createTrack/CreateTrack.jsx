import './styles.css';
import Window from "../../components/UI/window";
import Wrapper from "../../components/UI/wrapper";
import Input from '../../components/UI/input';
import FormButtons from '../../components/UI/formButtons';

function CreateTrack() {

  function submit(event) {
    event.preventDefault();
  }

  return (
    <Wrapper>
      <Window title="Nova Faixa">
        <form className="form-new-album" onSubmit={submit}>
          <Input name="Id do Álbum" type="number" placeholder="Ex: 287" />
          <Input name="Nome" type="text" placeholder="Ex: Rei do Gado" />
          <Input name="Ano" type="number" placeholder="Ex: 2002" />
          <FormButtons />
        </form>
      </Window>
    </Wrapper>
  )
}

export default CreateTrack;