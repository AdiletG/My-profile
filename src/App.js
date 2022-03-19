import React from 'react'
import styles from './style.css'
import Header from "./Components/Header/Header";
import Main from "./Components/Pages/Main/Main";
import Footer from "./Components/Footer/Footer";
import Video from './Assets/App/y2mate.com - Планета Земля Earth_1080p.mp4'
import ASpace from './Assets/App/ASpace.mp4'
import SpaceWay from './Assets/App/SpaceWay.mp4'
import Starts from './Assets/App/Starts.webm'
import {Routes, Route} from 'react-router-dom'
import AboutMe from "./Components/Pages/AboutMe/AboutMe";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import Contact from "./Components/Pages/Contact/Contact";
function App() {

    const {App, bg, container} = styles;

  return (
    <div className={App}>
        <video src={SpaceWay} autoPlay muted loop className={bg}/>
        <div className={container}>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/about-me' element={<AboutMe/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
