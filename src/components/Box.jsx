import React from 'react';
import '../assets/css/Box.css';

function Box(props){
    return(
        <div className="box">
            <p>{props.title}</p>
        </div>
    )
}

export default Box;