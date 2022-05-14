import Menu from "../menu";
import "./styles.css";

function Window({ title, children }) {
  return (
    <div className="window">
      <header>
        <div>
          <Menu />
          <img src="./assets/logo.png" alt="Tião Carreiro" />
        </div>
        <h2>{title}</h2>
      </header>
      <div className="window__content">
        <h1>chcucu</h1>
        {children}
      </div>
    </div>
  )
}

export default Window;