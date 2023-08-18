//estilização
import "./style.css";

function CardServ(props: any) {
    return (


        <div className="servico">
            <div className="topo_servico">
                <h3>{props.titulo}</h3>
                <span>R${props.proposta}</span>
            </div>
            <p>{props.descricao}</p>
            <div className="techs">

                {
                    props.techs.map((techs: string, index: number) => {
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