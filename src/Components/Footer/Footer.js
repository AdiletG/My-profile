import React from 'react';
import styles from './Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {

    const {footer, nav, social, links, contact, phone, phoneIcon, icon } = styles;

    return (
        <footer className={footer}>

                <nav className={nav}>
                        <div className={social}>
                            <a href="https://www.instagram.com/adiletg8/" target='_blank' className={links}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://github.com/AdiletG" target='_blank' className={links}><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://t.me/Adiletg8" target='_blank' className={links}><FontAwesomeIcon icon={faTelegram}/></a>
                            <a href="https://www.linkedin.com/in/adilet-g-621b71231/" target='_blank' className={links}><FontAwesomeIcon icon={faLinkedin}/></a>
                        </div>
                        <a href="tel:+996 500 41 17 13" className={contact}>
                            <div className={phoneIcon}><FontAwesomeIcon icon={faPhone} className={icon}/></div>
                            <p className={phone}><b>+996 500 41 17 13</b></p>
                        </a>
                </nav>
        </footer>
    );
};

export default Footer;