import "./styles.css";

function Window({ title, children }) {
  return (
    <div className="window">
      <header>
        <div>
          <span>menu</span>
          <img src="./assets/logo.png" alt="" />
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