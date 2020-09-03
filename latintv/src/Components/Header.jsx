import React from 'react';
import { Link } from "react-router-dom";
import './styles/Header.scss';
import logo from '../Images/logo_forms.png';

const Header = () => {
    return (
        <header className='containerHeader'>
            <div className='containerLogo'>
                <Link className='linkHome' to={'/'}><img className='logoLatinTv' src ={logo} alt="Logo Latin TV"/></Link>
            </div>
            <div className='containerIniciarSesion'>
                <section className='preguntasFrecuentes'><p><Link className='linkHome' to={'/'}>Preguntas frecuentes</Link></p></section>
                <section className='iniciarSesion'><p><Link className='linkHome' to={'/login'}>Iniciar sesión</Link></p></section>
            </div>
        </header>
    )
};
export default Header;
