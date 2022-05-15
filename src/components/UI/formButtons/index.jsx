import { Link } from 'react-router-dom';
import './styles.css';

function FormButtons({ onClick }) {
  return (
    <div className="form-buttons">
      <Link to="/updatealbums">cancelar</Link>
      <button onClick={onClick}>Inserir</button>
    </div>
  )
}

export default FormButtons;