import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contact';
import Footer from './components/Footer';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <NavBar />
  <Hero />
  <About />
  <Projects />
  <Contacts />
  <Footer />
  </React.StrictMode>
)
