import React from 'react';
import './Header.css'
import Logo from '../Header/img/Header__logo.png'
import {NavLink} from 'react-router-dom'
const Header = () => {


    return (
        <header className='header'>
                <div className='nav'>
                    <div className='logo'>
                        <img src={Logo} alt="Header-logo" className='img'/>
                        <h1 className='title'>Adilet G</h1>
                    </div>
                    <ul className='list'>
                        <NavLink className='item' to='/'>Home</NavLink>
                        <NavLink className='item' to='/about-me'>About me</NavLink>
                        <NavLink className='item' to='/portfolio'>Portfolio</NavLink>
                        <NavLink className='item' to='/contact'>Contact</NavLink>
                    </ul>
                </div>
        </header>
    );
};

export default Header;