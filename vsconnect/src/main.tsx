import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaServicos from './pages/ListaServicos/index';



//componentes
import Home from "./pages/Home/";
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login/index';

//estilização global
import "./index.css";





//Rotas das páginas

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header /> {/* Renderiza o header fora das Rotas */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listarServicos' element={<ListaServicos />} />
        <Route path='/' element={<Login />} />
      </Routes>
      <Footer /> {/* Renderiza o footer fora das Rotas */}
    </Router>
  </React.StrictMode>,
);