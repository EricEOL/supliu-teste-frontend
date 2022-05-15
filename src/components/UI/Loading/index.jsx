import './styles.css';

function Loading() {
  return (
    <div className="container-loading">
      <img src="./assets/logo.png" alt="Tião Carreiro" />
      <div className='progress-bar-bg'>
        <div className='progress-bar'></div>
      </div>
    </div>
  )
}

export default Loading;