import { urlCadastro, urlLogin, urlTeste } from "../Config/apiConfig.js";

const gerarTokenAcesso = async (dados) => {
    const conexao = await fetch(urlLogin, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            username: dados.nomeUsuario,
            password: dados.senha
        })
    })
    try{
        const token = await conexao.json()
        return token
    }
    catch(error){
        return error
    }
}

const loginUsuario = async (token) => {
    const teste = await fetch(urlTeste, {
        method: 'GET',
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
    try{
        const dadosLogin = await teste.json()
        return dadosLogin
    }
    catch(error){
        return error
    }
}


const cadastroUsuario = async (dados) => {
    const conexao = await fetch(urlCadastro, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            username: dados.nomeUsuario,
            password: dados.senha
        })
    })
    return conexao
}

export { gerarTokenAcesso, cadastroUsuario, loginUsuario }