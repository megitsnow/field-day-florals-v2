import './index.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'
import Footer from './components/Footer';
import {photos, setting} from './PhotoCollageData'
import portfolioPhotos from './PortfolioCollageData'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<HomePage photos = {photos}/>}/>
        <Route path = "/about" element = {<AboutPage/>}/>
        <Route path = "/services" element = {<ServicesPage/>}/>
        <Route path = "/portfolio" element = {<PortfolioPage portfolioPhotos = {portfolioPhotos}/>}/>
        <Route path = "/contact" element = {<ContactPage/>}/>
      </Routes> 
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
