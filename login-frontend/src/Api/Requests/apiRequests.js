import { urlCadastro, urlLogin, urlTeste } from "../Config/apiConfig.js";

const loginUsuario = async (dados) => {
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
    if (conexao.status === 200) {
        window.alert('logado')
    }
    else {
        const teste = await fetch(urlTeste)
        const json = teste.json()
        console.log(json)
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

export { loginUsuario, cadastroUsuario }