//rotas
import { Link, useParams } from "react-router-dom";
import Footer from "../../../components/Footer";


//hooks
import { useEffect, useState } from "react";
import api from "../../../utils/api";

//estilização
import "./style.css";





function PerfilUsuario() {


    const { idUsuario} = useParams();

    const [nome, setNome] = useState<string>("");
    const [foto, setFoto] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [uf, setUf] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [listaSkills, setListaSkills] = useState<string[]>([]);


    function  buscarUsuarioPorID(){
        //Estrutura Básica para consumir API
        api.get("users/" +idUsuario)
        .then((response: any) => {
          console.log(response);

          //Seta os valores referente as informcoes do usurario
          setNome(response.data.nome);
                setFoto(response.data.user_img);
                setEmail(response.data.email);
                setCidade(response.data.cidade);
                setUf(response.data.uf);
                setListaSkills(response.data.hardSkills);
          
        })
        .catch((error: any) => console.log(error));
        
    }
    useEffect(()=> {
        buscarUsuarioPorID();
    },
    [])

    return (
        <main id="main_perfilusuario_dev">
            <div className="container container_perfil_dev">
                <div className="perfil_dev_conteudo">
                    <h1>Página de Perfil - {nome}</h1>

                    <div className="topo_dev">
                        <img src={"http://localhost:3000/static/" + foto} alt={"Foto de perfil de " + nome} 
                        />
                        <h2>{nome}</h2>
                    </div>

                    <div className="contato_local">
                        <div className="contato">
                            <p>Email para contato: </p>
                            <Link to={"mailto:c" +email}>{email}</Link>
                        </div>
                        <div className="local">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) C pyright 2023 Fonticons, Inc. */}
                                <path
                                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                                />
                            </svg>
                            <p>De: {cidade} - {uf}</p>
                        </div>
                    </div>

                    <div className="techs">
                        <p>Tecnologias principais: </p>
                        <div className="lista_skills">
                            {
                                listaSkills.map((
                                    tech: string,
                                    index: number,) => {
                                        return <span key={index}>{tech}</span>
                                    })


                            }
                            {/* <span>HTML</span>
                            <span>CSS</span>
                            <span>React</span> */}
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </main>);
}

export default PerfilUsuario;