import React, {useState} from 'react';
import "./styles/navbar.css";
import Project from '../icons/project.png'
import { Link } from 'react-router-dom'

//

function Navbar() {
    const [active, setActive] = useState("nav__menu")
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    
    const navToggle = () => {
        active === 'nav__menu'
            ? setActive('nav__menu nav__active')
            : setActive("nav__menu")

        toggleIcon === 'nav__toggler'
            ? setToggleIcon('nav__toggler toggle')
            : setToggleIcon("nav__toggler");
    };
    return (
        <nav className="nav">
            
            <a href="/" className="nav__brand">Air</a>
            
            <ul className={active}>
                <li className="nav_item"></li><a href="/" className="nav__link">Inicio</a>
                <li className="nav_item"></li><a href="/inversion" className="nav__link">Productos</a>
                <li className="nav_item"></li><a href="/mapa-bonos" className="nav__link">Buscar Bonos</a>  
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>

    )
}

export default Navbar;