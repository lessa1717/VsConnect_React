//estilização
import "./style.css";

function CardServ(props: any) {
    return (
        

        <div className="servico">
        <div className="topo_servico">
            <h3>{props.titulo}</h3>
            <span>{props.descricao}</span>
        </div>
        <p>{props.proposta}</p>
        <div id="techs">

                {
                    props.listaTechs.map((tech: string, indice: number) => {
                        return <span key={indice}>{tech}</span>
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