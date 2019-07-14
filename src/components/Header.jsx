import React from 'react';


const Header = (props) => {
    return (
        <header className="header">
            <img src="http://saadbess.github.io/george-bokhua/img/fire.jpg" />
            <h1> Hello {props.name}</h1>
        </header>
        )
}

export default Header;