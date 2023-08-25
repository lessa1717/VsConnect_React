import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import secureLocalStorage from "react-secure-storage";


//componentes
import Home from "./pages/Home";
import ListaServicos from './pages/ListaServicos';
import ListarDev from './pages/ListaDevs';
import CadastroServ from './pages/CadastroDev';
import CadastroUsuario from './pages/CadastroUsuario';
import Header from './components/Header';
import Login from './pages/Login';
import PerfilUsuario from './pages/PerfilUsuario/PerfilUsuario';

//estilização global
import "./index.css";
import VisualizarServico from './pages/Home/VisualizarServico';
import CadastroServico from './pages/CadastroServico';

function logado(){
  if (secureLocalStorage.getItem("user")) {
    const objetoUsuario: any  = secureLocalStorage.getItem("user")
    const nome: string = objetoUsuario.user.nome.trim().split(" ")[0];
    return{logado: true,nomeUsuario : nome}
  }else{
    return{ logado : false, nomeUsuario: null}
  }
}



//Rotas das páginas

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header  usuario={logado()}/> {/* Renderiza o header fora das Rotas */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ListaServicos' element={<ListaServicos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/CadastroServ' element={<CadastroServ />} />
        {/* <Route path='/CadastroDev' element={<CadastroDev />} /> */}
        <Route path='/ListarDev' element={<ListarDev />} />
        {/*Rota com parametro, indicando o identificador do desenvolvedor*/ }
        <Route path='perfil/:idUsuario' element={<PerfilUsuario/>}/>
        <Route path='servico/:idServico' element={<VisualizarServico/>}/>
        <Route path='cadastro/usuario' element={<CadastroUsuario/>}/>
        <Route path='cadastro/servico' element={<CadastroServico/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);