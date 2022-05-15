import './styles.css';

function Input({name, type, placeholder}) {
  return (
    <div>
      <label>{name}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input;