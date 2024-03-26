import { useState } from "react"
import Botao from "../Botao"
import Input from "../Input"
import "./Form.css"

const Form = (props) => {
    const [nomeUsuario, setNomeUsuario] = useState('')
    const [senha, setSenha] = useState('')


    const aoEnviar = (evento) => {
        evento.preventDefault()
        props.enviarDados({
            nomeUsuario: nomeUsuario,
            senha: senha
        })
    }

    return (
        props.tipoFormulario === 'Login' ?
            <form className="formulario_login" onSubmit={aoEnviar}>
                <Input label="Nome de usuário" placeholder="Digite seu nome de usuário" required={true} type="text" novoDigito={(digito) => setNomeUsuario(digito)}></Input>
                <Input label="Senha" placeholder="Digite sua senha" required={true} type="password" novoDigito={(digito) => setSenha(digito)}></Input>
                <Botao acao="Fazer Login"></Botao>
            </form>
            :
            <form className="formulario_login" onSubmit={aoEnviar}>
                <Input label="Nome de usuário" placeholder="Cadastre seu nome de usuário" required={true} type="text" novoDigito={(digito) => setNomeUsuario(digito)}></Input>
                <Input label="Senha" placeholder="Cadastre sua senha" required={true} type="password" novoDigito={(digito) => setSenha(digito)}></Input>
                <Botao acao="Fazer Cadastro"></Botao>
            </form>
    )
}

export default Form