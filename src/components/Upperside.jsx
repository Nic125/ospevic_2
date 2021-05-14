import React from 'react';
import '../assets/css/Upperside.css';
import BottomMenu from './BottomMenu';
import Menu from './Menu';

function Upperside(){
    return(
        <div className="upper">
            <div className="upper-content">
                <Menu />
            </div>
            <div className="bottom-content">
                <BottomMenu />
            </div>
        </div>
    )
}

export default Upperside;