import './styles.css';
import Window from "../../components/UI/window";
import Wrapper from "../../components/UI/wrapper";
import Input from '../../components/UI/input';
import FormButtons from '../../components/UI/formButtons';

function CreateAlbum() {

  function submit(event) {
    event.preventDefault();
  }

  return (
    <Wrapper>
      <Window title="Novo Álbum">
        <form className="form-new-album" onSubmit={submit}>
          <Input name="Nome" type="text" placeholder="Ex: Rei do Gado"/>
          <Input name="Ano" type="number" placeholder="Ex: 2002"/>
          <FormButtons />
        </form>
      </Window>
    </Wrapper>
  )
}

export default CreateAlbum;