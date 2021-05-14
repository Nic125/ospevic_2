import React from 'react';
import '../assets/css/Menu.css'
import logo from '../assets/images/logo.svg'
import Box from './Box';

function Menu(){
    return(
        <div className="menu">
            <div className="first">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="links">
                    <div className="whatsapp"><i class="bi bi-whatsapp"></i></div>
                    <div className="phone"><p>Centro médico vía Whatsapp</p><p>+54 9 351 6013462</p></div>
                </div>
            </div>
            <div className="menu-box">
                <Box title="Inicio" />
                <Box title="Red prestadores" />
                <Box title="Beneficios" />
                <Box title="S.U.V.I.C.O." />
                <Box title="Acceso carga autorizaciones" />
                <Box title="Centro médico OSPEVIC" />
                <Box title="Contacto" />
            </div>

        </div>
    )
}

export default Menu;