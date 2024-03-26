import { useState } from "react"
import Form from "../Form"
import "./Login.css"

const Login = () => {
    
    const [listaDados, setListaDados] = useState([])

    const receberDados = (dados) =>{
        setListaDados([...listaDados, dados])
        console.log(listaDados)
    }

    const fazerLogin = async (dados) => {
        const conexaoAPI = await fetch('http://127.0.0.1:8000/api/login/',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                username: dados.nomeUsuario,
                password: dados.senha
            })
        })
        if (conexaoAPI.status === 200){
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
                <Form enviarDados = {dados => fazerLogin(dados)}>
                </Form>
            </div>
        
        </section>
    )   
}

export default Login