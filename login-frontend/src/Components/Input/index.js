import "./Input.css"

const Input = (props) => {

    const aoDigitar = (evento) => {
        evento.preventDefault()
        props.novoDigito(evento.target.value)
    }

    return(
        <div className="container_input">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} required={props.required} type={props.type} onChange={aoDigitar}></input>
        </div>
    )
}

export default Input