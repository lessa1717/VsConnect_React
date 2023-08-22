// Hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../../components/Footer";
import api from "../../../utils/api";

// Estilização
import "./style.css";

function VisualizarServico() {
    const { idServico } = useParams();

    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [techs, setTechs] = useState<string[]>([]);

    // useEffect(() => {
    //     async function buscarServicoPorID() {
    //         try {
    //             const response = await api.get(`servicos/${idServico}`);
    //             const data = response.data; 
    //             console.log(data);
                
    //             setNome(data.nome);
    //             setValor(data.valor);
    //             setDescricao(data.descricao);
    //             setTechs(data.techs); 
    //         } catch (error) {
    //             console.error("Erro ao buscar o serviço:", error);
    //         }
    //     }

    //     buscarServicoPorID();
    // }, [idServico]);

    function  buscarServicoPorID(){
        //Estrutura Básica para consumir API
        api.get("servicos/" +idServico)
        .then((response: any) => {
          console.log(response);

          //Seta os valores referente as informcoes do usurario
                setNome(response.data.nome);
                setDescricao(response.data.descricao);
                setValor(response.data.valor);
                setTechs(response.data.techs);
          
        })
        .catch((error: any) => console.log(error));
        
    }
    useEffect(()=> {
        buscarServicoPorID();
    },
    [])

    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{nome}</h2>
                        <span>{valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                        {techs.map((skill, index) => (
                            <span key={index}>{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default VisualizarServico;