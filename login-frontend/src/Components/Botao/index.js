import './Botao.css'

const Botao = (props) => {
    return(
        <button className="botao_formulario">{props.acao}</button>
    )
}

export default Botao