import iconFace from "../../assets/images/facebook.svg";
import iconInsta from "../../assets/images/instagram.svg";
import iconLinkedin from "../../assets/images/linkedin.svg";
import imgLogo from "../../assets/images/logo.svg"

import { Link } from 'react-router-dom'
import React from "react";

import "./style.css";

function Footer() {
    return (
        <footer>
            <div className="container rodape">

                <div className="rodape_conteudo">
                    <div className="rodape_conteudo_paginas_footer">
                        <h2>Páginas</h2>
                        <ul>
                            {/* style={{ textDecoration: 'none', color:'white'}} */}
                            <li><Link to="/Login">Login</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/ListaServicos">Listar Serviços</Link></li>
                            <li><Link to="/ListarDev">Listar Desenvolvedores</Link></li>
                            <li><Link to='/cadastro/usuario'>Cadastrar Cliente</Link></li>
                            <li><Link to='/cadastro/usuario'>Cadastrar Desenvolvedor</Link></li>
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
                        <a href="mailto:">contato@vsconnect.com</a>
                    </div>
                </div>
                <p>todos os direitos reservados ©.</p>
            </div>
        </footer >)
}



export default Footer;
