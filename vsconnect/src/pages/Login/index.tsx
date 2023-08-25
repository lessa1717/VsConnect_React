
//Hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

//Axios
import api from "../../utils/api";

//Estilizaçao
import "./style.css";

//npm install react-scure-storage foi instalado

//localStorage
import secureLocalStorage from "react-secure-storage";

function Login() {
    //Variavel que utiliza a funçao useNavigate para navegar entre os componentes
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    function realizarAutenticacao(event: any) {
        event.preventDefault();
        const usuario = {
            email: email,
            password: senha
        };
        console.log("aqui");
        

        api.post("login", usuario)
            .then((response: any) => {
                console.log(response.data);

                secureLocalStorage.setItem("user", response.data)
                
                //Redirecionar so componente perfil
                navigate("/perfil/" + response.data.user.id);
                //recarrega a tela
                navigate(0)
            })
            .catch((error: any) => {
                console.log(error);
                
                alert("Erro ao tentar se logar! :(");
            })

    }



    return (
        <div>

            <main id="tela_login">
                <div className="container container_login">
                    <div className="login_conteudo">
                        <h1>Login</h1>
                        <hr />
                        <form className="login_formulario" method="POST " onSubmit={realizarAutenticacao}>
                            <div className="login_box_input">
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" id="email" placeholder="Digite aqui seu e-mail:"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="login_box_input">
                                <label htmlFor="senha">Senha:</label>
                                <input type="password" id="senha" placeholder="Digite aqui sua senha:"
                                    required
                                    onChange={(e) => setSenha(e.target.value)} />
                            </div>
                            <input className="login_botao" type="submit" value="Logar" />
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Login;