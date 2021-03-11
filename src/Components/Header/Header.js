import React from 'react';
import img from '../../Images/background1.png';


const Header = () => {
    const imgStyle ={
        backgroundColor :  'black',
    }
    return (
        <div style={imgStyle}>
            <img src={img}></img>
        </div>
    );
};

export default Header;