import Form from "../Form"
import "../Login/Login.css"

const Cadastro = () => {
    
    const cadastrarUsuario = async (dados) => {
        const conexaoAPI = await fetch('http://127.0.0.1:8000/api/register/',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                username: dados.nomeUsuario,
                password: dados.senha
            })
        })
        if (conexaoAPI.status === 201){
            alert('logado')
            return
        }
        else{
            alert('erro')
        }
        console.log(conexaoAPI)
        console.log(dados)
    }

    return(
        <section className="container_login">
            <div className="container_form">
                <Form enviarDados = {dados => cadastrarUsuario(dados)}>
                </Form>
            </div>
        
        </section>
    )   
}

export default Cadastro