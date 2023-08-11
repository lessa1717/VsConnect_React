import iconFace from "../../assets/images/facebook.svg";
import iconInsta from "../../assets/images/instagram.svg";
import iconLinkedin from "../../assets/images/linkedin.svg";
import imgLogo from "../../assets/images/logo.svg"
import imgDev from "../../assets/images/dev.png";
import { Link} from 'react-router-dom'

import "./style.css";

function Footer(){
    return (
    <footer>
    <div className="container rodape">
       
        <div className="rodape_conteudo">
            <div className="rodape_conteudo_paginas">
                <h2>Páginas</h2>
                <ul>
                    <li>Login</li>
                    <li>Home</li>
                    <li>Listar Serviços</li>
                    <li>Cadastrar Cliente<Link to = {"/CadastroDev"}></Link></li>
                    <li>Cadastrar Desenvolvedor</li>
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
                <a href="mailto:">contato@vsconnect.com</a>
            </div>
        </div>
        <p>todos os direitos reservados ©.</p>
    </div>
</footer > )}
    


export default Footer;
