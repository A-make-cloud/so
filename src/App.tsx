import React from 'react';
import './App.css';
import { Home } from './screens/Home';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Ressources } from './screens/Ressources';
import { Contact } from './screens/Contact';
import { FooterLinks } from './components/FooterLinks';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='container mt-10'>
      <header className='flex justify-between mb-5'>
        <img className='w-10' src='images/logo.png' alt='logo' />
        <nav className='flex justify-end fs-5 text'>
          <NavLink className='text-decoration-none mr-3 text-dark' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to='/'>Accueil</NavLink> <br /><br />
          <NavLink className='text-decoration-none mr-3  text-dark' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to='/ressources'>Ressources</NavLink><br /><br />
          <NavLink className='text-decoration-none mr-3  text-dark' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to='/contact'>Contact</NavLink><br /><br />
        </nav>
      </header >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ressources' element={<Ressources />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <footer className='flex justify-between mt-10 pt-3' style={{ borderTop: '1px solid grey' }}>
        <img className='w-10' src='images/logo.png' alt='logo' />

        <p>© 2023 React</p>
        <ol className='flex justify-around'>
          <li className="mr-10"> <a className="hover:underline" href="https://www.pinterest.fr/Agnes_Cloud/_saved/"
            target="_blank"><i className="fa fa-pinterest fa-1x color-gold"
              aria-hidden="true"></i></a> </li>
          <li className="mr-10"> <a className="hover:underline" href="https://www.pinterest.fr/Agnes_Cloud/_saved/"
            target="_blank"><i className="fa fa-twitter fa-1x color-gold"
              aria-hidden="true"></i></a> </li>
          <li className="mr-10"> <a className="hover:underline" href="https://www.pinterest.fr/Agnes_Cloud/_saved/"
            target="_blank"><i className="fa fa-facebook fa-1x color-gold"
              aria-hidden="true"></i></a> </li>
        </ol>

      </footer>
    </div >
  );
}

export default App;
