import Form from "../../Components/Form"
import "./Login.css"
import { loginUsuario } from "../../Api/Requests/apiRequests"

const Login = () => {
    const fazerLogin = (dados) =>{
        loginUsuario(dados)
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