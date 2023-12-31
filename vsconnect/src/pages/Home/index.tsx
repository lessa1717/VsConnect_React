// Chamando componentes (Header/Footer)
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import { Link } from 'react-router-dom'



//estilização
import "./style.css";


//imagens
import imgLogo from "../../assets/images/logo.svg";
import imgClientes from "../../assets/images/clientes.png";
import imgMaosDev from "../../assets/images/maos_dev.png";
import imgAlfinete from "../../assets/images/alfinete.png";
import imgDev from "../../assets/images/dev.png";
import iconFace from "../../assets/images/facebook.svg";
import iconInsta from "../../assets/images/instagram.svg";
import iconLinkedin from "../../assets/images/linkedin.svg";
import imgBanner_background from "../../assets/images/banner-background.png"
import Footer2 from '../../components/Footer2';

function Home() {



    // Mostrar menu no layout responsivo

    return (
        <div>

            {/* <Header /> */}
            <main id="main_home">
                <h1>página inicial VSconnect</h1>
                <section className="banner">
                    <div className="banner_conteudo">
                        <span className="banner_slogan_l1">VSConnect</span>
                        <p className="banner_slogan_l2">Conectando os melhores desenvolvedores independentes às mais diversas
                            oportunidades.</p>
                        <p className="banner_slogan_l3">Conecte-se e comece a desvendar esse mundo!</p>
                        <div className="banner_botoes">
                            <a className="botao banner_botao_dev_home" ><Link to={"/CadastroDev"}>desenvolvedor</Link></a>
                            <a className="botao banner_botao_cli_home" ><Link to={"/CadastroServ"}>cliente</Link></a>
                        </div>
                    </div>
                </section>
                <section className="container para_clientes">
                    <div className="span_cliente">
                        <p>Desde 2015 unindo propósitos.<br />Uma nova forma de conectar pessoas.</p>
                    </div>
                    <div className="clientes_conteudo">
                        <img src={imgClientes} alt="" />
                        <div className="clientes_texto">
                            <h2>para clientes</h2>
                            <ul>
                                <li>cadastrar serviços</li>
                                <li>procurar por desenvolvedores</li>
                            </ul>
                            <div>
                                <a className="botao clientes_botao_cli"><Link to={"/CadastroServ"}>criar conta</Link></a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="conexao"></div>
                <section className="container para_devs">
                    <div className="devs_texto">
                        <h2>para desenvolvedores</h2>
                        <ul>
                            <li>encontrar serviços</li>
                            <li>divulgar suas hardskills</li>
                        </ul>
                        <div>
                            <a className="botao clientes_botao_devs"><Link to={"/CadastroDev"}>criar conta</Link></a>
                        </div>
                    </div>
                    <img src={imgMaosDev} alt="" />
                </section>
                <section className="container servicos">
                    <h2>serviços</h2>
                    <div className="servicos_cards">
                        <div className="card card1">
                            <img src={imgAlfinete} alt="" />
                            <h3>Aplicativo para PetShop</h3>
                            <p>Possuo um Petshop e gostaria de um aplicativo para que meus clientes pudessem agendar serviços
                                como: banho e tosa, taxi dog, hotelzinho e etc.</p>
                            <p>Proposta: A Combinar</p>
                        </div>
                        <div className="card card2">
                            <img src={imgAlfinete} alt="" />
                            <h3>Site para Pizzaria</h3>
                            <p>Preciso de um site para divulgar o sabores das pizzas, o endereço, os telefones de contato,
                                nossas redes sociais.</p>
                            <p>Proposta: R$750,00</p>
                        </div>
                    </div>
                    <Link to={"/ListaServicos"}>Ver mais serviços</Link>
                </section>
            </main>
            <Footer2 />
        </div>
    );
}

//o componente Home pode ser chamado em outros arquivos
export default Home;