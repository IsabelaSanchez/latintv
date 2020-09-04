import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer'
import FloatButton from '../Components/FloatButton'
import { Link } from "react-router-dom";
import './styles/Home.scss'
import image1 from '../Images/home_1.png';
import image2 from '../Images/home_2.png';
import image3 from '../Images/home_3.png';
import click from './styles/assets/hacer-clic.svg'
import clock from './styles/assets/clock.svg'
import safe from './styles/assets/safe.svg'
import clear from './styles/assets/clear.svg'

const Home = () => {
    return(
        <div className='containerHome'>
            <Header/>
            <div className='containerCategory'>
                <section className='containerSectionCategory'>
                    <img className='imageCategory' src={image1} alt=''/>
                    <div className='nameCategory'>
                        <p className='category'>BLOQUE DE PROGRAMAS<br/>DIARIOS</p>
                        <Link className='selectCaregory' to={'/CategoriaRegular'}>Detalles</Link>
                    </div>
                </section>
                <section className='containerSectionCategory'>
                    <img className='imageCategory' src={image2} alt=''/>
                    <div className='nameCategory'>
                        <p className='category'>BLOQUE DE PROGRAMAS<br/>PRIME</p>
                        <Link className='selectCaregory' to={'/CategoriaPrime'}>Detalles</Link>
                    </div>
                </section>
                <section className='containerSectionCategory'>
                    <img className='imageCategory' src={image3} alt=''/>
                    <div className='nameCategory'>
                        <p className='category'>BLOQUE DE PROGRAMAS<br/>SUPER PRIME</p>
                        <Link className='selectCaregory' to={'/CategoriaSuperPrime'}>Detalles</Link>
                    </div>
                </section>
            </div>
            <div className='Containersaludo'>
                <section className='sectionSaludo'><p>Bienvenido al área comercial de Latin TV</p></section>
                <section><section className='sectionDescription'>Somos el tercer canal comercial del país y apuntamos a ser el primer canal de televisión en Perú. Queremos ofrecerte una plataforma que te permita seleccionar y comprar los espacios publicitarios en los programas con la audiencia que tu marca necesita.  Nuestro gran desafío es crecer contigo.</section></section><br/>
                <section className='sectionValues'>
                    <img src={click} className="click-logo" alt="click" />
                    <section>Intuitiva</section>
                    <img src={clock} className="clock-logo" alt="clock" />
                    <section>Rápida y fácil</section>
                    <img src={safe} className="safe-logo" alt="safe" />
                    <section>Segura</section>
                    <img src={clear} className="clear-logo" alt="clear" />
                    <section>Clara y precisa</section>
                </section>
            </div>
            <FloatButton/>
            <Footer/>
        </div>
          
    )
};
export default Home;