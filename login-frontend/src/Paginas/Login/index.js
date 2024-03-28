import Form from "../../Components/Form"
import "./Login.css"
import { gerarTokenAcesso, loginUsuario } from "../../Api/Requests/apiRequests"

const Login = () => {
    const fazerLogin = async (dados) =>{
        const token = await gerarTokenAcesso(dados)
        const login = await loginUsuario(token)
        console.log(login)
        
    }

    return(
        <section className="container_login">
            <div className="container_form">
                <Form tipoFormulario = 'Login' enviarDados = {dados => fazerLogin(dados)}>
                </Form>
            </div>
        </section>
    )   
}

export default Login