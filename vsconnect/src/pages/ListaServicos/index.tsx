// import Header from "../../components/Header";

//componentes
import Footer from "../../components/Footer";
import CardServ from "../../components/CardServ";

//estilizaçao
import "./style.css";

//hooks
import { useEffect, useState } from "react";

import api from "../../utils/api";


function ListaServicos() {
    //STATE DEVS
    const [servico, setServico] = useState<any[]>([]);


    // const [listaServicosFiltrados, setlistaServicosFiltrados] = useState<any[]>(servico);

    const [skillDigitado, setSkillDigitado] = useState<string>("");

    //função onde pega o que o usuario digitou
    function verificarCampoSkill(event: any) {
        if (event.target.value === "") {
            listaServicos();
        }
        setSkillDigitado(event.target.value);
    }

    function buscarServicosPorSkill(event: any) {
        //não recarrega a pagina
        event.preventDefault();

        //filtrar devs pela skill digitada no campo buscar
        const servicosFiltrados = servico.filter((servico: any) => servico.techs.includes(skillDigitado.toLocaleUpperCase()));

        if (servicosFiltrados.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill :(")
        } else {
            //atribui valor de devs filtrado, ao state ListaDevsFiltrados 
            setServico(servicosFiltrados);
        }


    }

    function listaServicos() {
        api.get("servicos").then((response: any) => {
            //
            setServico(response.data)
        })
            .catch((error: any) => {

                console.log("Erro ao realizar requisicao: ", error);

            })

    }

    useEffect(() => {
        //executa açao
        listaServicos();

    },
        [])


    return (
        <div>
            {/* <Header /> */}
            <main id="main_listaservicos">
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1>Lista de Serviços</h1>
                        <hr />
                        <form method="post" onSubmit={buscarServicosPorSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input
                                        type="search"
                                        name="campo-busca"
                                        id="busca"
                                        onChange={verificarCampoSkill}
                                        placeholder="Buscar serviços por tecnologias..."
                                    />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {
                                    servico.map((servico: any, indice: number) => {
                                        return <li key={indice}>
                                            <CardServ
                                                titulo={servico.nome}
                                                descricao={servico.descricao}
                                                proposta={servico.valor}
                                                techs={servico.techs}
                                            />
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>

    )
}

export default ListaServicos;





