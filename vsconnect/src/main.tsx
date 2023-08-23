import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




//componentes
import Home from "./pages/Home";
import ListaServicos from './pages/ListaServicos';
import Login from './pages/Login';
import ListarDev from './pages/ListaDevs';
import CadastroDev from './pages/CadastroDev';
import CadastroServ from './pages/CadastroDev';
import CadastroUsuario from './pages/CadastroUsuario';
import Header from './components/Header';

import PerfilUsuario from './pages/PerfilUsuario/PerfilUsuario';

//estilização global
import "./index.css";
import VisualizarServico from './pages/Home/VisualizarServico';





//Rotas das páginas

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header /> {/* Renderiza o header fora das Rotas */}
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);