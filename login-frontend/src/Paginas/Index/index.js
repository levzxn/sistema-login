import { Link } from "react-router-dom"
import './Index.css'
const Index = () => {
    return (
        <div className="container_index">
            <div className="logo">
                <svg viewBox="0 0 24 24" aria-hidden="true" fill='white' class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-rxcuwo r-1777fci r-m327ed r-494qqr"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
            </div>
            <div className="botoes">
                <h1>Acontecendo Agora</h1>
                <h2>Entre ou cadastre-se</h2>
                <button>
                    <Link className="link" to={'/cadastro'}>Entre</Link>
                </button>
                <button>
                    <Link className="link" to={'/login'}>Cadastre-se</Link>
                </button>

            </div>

        </div>

    )
}

export default Index