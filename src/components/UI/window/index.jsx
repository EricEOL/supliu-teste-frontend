import Menu from "../menu";
import './styles.css';

function Window({ title, children }) {
  return (
    <div className="window">
      <header>
        <div>
          <Menu />
          <img className="logo" src="./assets/logo.png" alt="Tião Carreiro" />
        </div>
        <h2>{title}</h2>
      </header>
      <div className="window__content">
        {children}
        <div className="content__background"></div>
      </div>
    </div>
  )
}

export default Window;