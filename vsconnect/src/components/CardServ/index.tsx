//estilização
import "./style.css";
import { Link } from "react-router-dom";

function CardServ(props: any) {
    return (


        <div className="servico">
            <div className="topo_servico">
            <Link to={"/servico/" + props.id}> <h3>{props.nome}</h3></Link>
                <span>R${props.valor}</span>
            </div>
            <p>{props.descricao}</p>
            <div className="techs">

                {
                    props.listaSkills.map((techs: string, index: number) => {
                        return <span key={index}>{techs}</span>
                    })
                }

                {/* <span>HTML</span>
                <span>CSS</span>
                <span>React</span> */}
            </div>
        </div>
    );
}

export default CardServ;