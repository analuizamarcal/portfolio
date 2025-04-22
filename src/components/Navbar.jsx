import { NavLink } from "react-router-dom"

import { FiSun, FiMoon } from 'react-icons/fi'

import './Navbar.css'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav>
      <div>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} id="switch"/>
          <span className="slider">
            <span className="icon">{darkMode ? <FiMoon /> : <FiSun />}</span>
          </span>
        </label>
        <h1>Ana Luiza</h1>
      </div>
      <div className="links">
        <NavLink to='/' className='nav-link'>Início</NavLink>
        <NavLink to='/about' className='nav-link'>Sobre</NavLink>
        <NavLink to='/skills' className='nav-link'>Habilidades</NavLink>
        <NavLink to='/projects' className='nav-link'>Projetos</NavLink>
        <NavLink to='/contact' className='nav-link'>Contato</NavLink>
      </div>
    </nav>
  )
}

export default Navbar