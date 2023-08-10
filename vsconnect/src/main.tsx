import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaServicos from './pages/ListaServicos/index';



//componentes
import Home from "./pages/Home/";
import Header from './components/Header';
import Footer from './components/Footer';

//estilização global
import "./index.css";





//Rotas das páginas

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/listarServicos' element={<ListaServicos/>}/>

//       </Routes>
//     </Router>
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header /> {/* Render the header outside of the <Routes> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listarServicos' element={<ListaServicos />} />
      </Routes>
      <Footer /> {/* Render the footer outside of the <Routes> */}
    </Router>
  </React.StrictMode>,
);