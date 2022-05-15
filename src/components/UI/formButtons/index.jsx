import './styles.css';

function FormButtons({ onClick }) {
  return (
    <div className="form-buttons">
      <a href="">cancelar</a>
      <button onClick={onClick}>Inserir</button>
    </div>
  )
}

export default FormButtons;