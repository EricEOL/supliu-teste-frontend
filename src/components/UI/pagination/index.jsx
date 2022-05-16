import './styles.css';

function Pagination({previous, next, disabledPrevious, disabledNext}) {
  return (
    <div className="pages-control">
      <button onClick={previous} disabled={disabledPrevious}>Anterior</button>
      <button onClick={next} disabled={disabledNext}>Próximo</button>
    </div>
  )
}

export default Pagination;