import Form from "../../Components/Form"
import "./Cadastro.css"
import { cadastroUsuario } from "../../Api/Requests/apiRequests"

const Cadastro = () => {
    const fazerCadastro = (dados) =>{
        cadastroUsuario(dados)
        console.log(dados)
    }
    
    return(
        <section className="container_login">
            <div className="container_form">
                <Form tipoFormulario = 'Cadastro' enviarDados = {dados => fazerCadastro(dados)}>
                </Form>
            </div>
        </section>
    )   
}

export default Cadastro