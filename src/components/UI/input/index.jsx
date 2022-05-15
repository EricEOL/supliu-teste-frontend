import './styles.css';

function Input({name, type, placeholder, onChange}) {
  return (
    <div>
      <label>{name}</label>
      <input type={type} placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default Input;