import React from 'react';
import styles from './Main.module.css'
import Me from '../../../Assets/MyImages/Me.jpg'
import {RiHtml5Line} from 'react-icons/ri'
import {FaCss3Alt} from 'react-icons/fa'
import {DiSass} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
const Main = () => {

    const {main, section, leftBox, img, skills, icons, rightBox, title, subtitle, description} = styles;

    return (
        <main className={main}>
                <div className={section}>
                    <div className={leftBox}>
                        <img src={Me} alt="" className={img}/>
                        <ul className={skills}>
                            <li className={icons}><RiHtml5Line/></li>
                            <li className={icons}><FaCss3Alt/></li>
                            <li className={icons}><DiSass/></li>
                            <li className={icons}><SiJavascript/></li>
                            <li className={icons}><FaReact/></li>
                        </ul>
                    </div>

                        <div className={rightBox}>
                            <h2 className={title}>Front-End Developer</h2>
                            <h3 className={subtitle}>My name is Gainazarov Adilet</h3>
                            <p className={description}></p>
                        </div>
                    </div>
        </main>
    );
};

export default Main;