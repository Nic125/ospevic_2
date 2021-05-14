import React from 'react';
import '../assets/css/BottomMenu.css';

function BottomMenu(){
    return(
        <div className="bottom-menu">
            <div className="big-box">
                <i class="bi bi-newspaper"></i>
                <p>Noticias</p>
            </div>
            <div className="big-box">
            <i class="bi bi-play-circle"></i>
                <p>Canal Ospevic</p>
            </div>
            <div className="big-box">
            <i class="bi bi-info-circle"></i>
                <p>Campañas</p>
            </div>
            <div className="big-box">
            <i class="bi bi-search"></i>
                <p>Buscar</p>
            </div>

        </div>
    )
}

export default BottomMenu;