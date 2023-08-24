import iconFace from "../../assets/images/facebook.svg";
import iconInsta from "../../assets/images/instagram.svg";
import iconLinkedin from "../../assets/images/linkedin.svg";
import imgLogo from "../../assets/images/logo.svg"
import imgDev from "../../assets/images/dev.png";
import { Link } from 'react-router-dom'

import "./style.css";

function Footer2() {
    return (
        <footer>
            <div className="container rodape">
                <div className="span_dicas">
                    <img src={imgDev} alt="" />
                    <div className="span_dicas_texto">
                        <p>Temos algumas dicas para o seu serviço ou freela ser um sucesso, acesse nossa página de
                            recomendações para saber mais.</p>
                        <a id="botao botao_dicas"><Link to={"/ListaServicos"}>mais dicas</Link></a>
                    </div>
                </div>
                <div className="rodape_conteudo">
                    <div className="rodape_conteudo_paginas_footer2">
                        <h2>Páginas</h2>
                        <ul>
                            <li><Link to="/Login" >Login</Link></li>
                            <li><Link to="/"  >Home</Link></li>
                            <li><Link to="/ListaServicos">Listar Serviços</Link></li>
                            <li><Link to="/ListarDev">Listar Desenvolvedores</Link></li>
                            <li><Link to="/CadastroDev"  >Cadastrar Cliente</Link></li>
                            <li><Link to="/CadastroDev"  >Cadastrar Desenvolvedor</Link></li>
                            <li><Link to="/cadastro/servico">Cadastrar Servico</Link></li>
                        </ul>
                    </div>
                    <img src={imgLogo} alt="" />
                    <div className="rodape_conteudo_contatos">
                        <h2>Contatos</h2>
                        <div>
                            <a href="#"><img src={iconFace} alt="" /></a>
                            <a href="#"><img src={iconInsta} alt="" /></a>
                            <a href="#"><img src={iconLinkedin} alt="" /></a>
                        </div>
                        <a href="mailto:contato@vsconnect.com">contato@vsconnect.com</a>
                    </div>
                </div>
                <p>todos os direitos reservados ©.</p>
            </div>
        </footer>
    );
}

export default Footer2;