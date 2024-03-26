import { urlCadastro, urlLogin } from "../Config/apiConfig.js";

const loginUsuario = async (dados) =>{
    const conexao = await fetch(urlLogin,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            username: dados.nomeUsuario,
            password: dados.senha
        })
    })
    if(!conexao.status === 200){
        return(
            <div>
                <h1>Usuário/Senha não encontrados</h1>
            </div>
        )
    }
}

const cadastroUsuario = async (dados) =>{
    const conexao = await fetch(urlCadastro,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            username: dados.nomeUsuario,
            password: dados.senha
        })
    })
    return conexao
}

export { loginUsuario, cadastroUsuario }