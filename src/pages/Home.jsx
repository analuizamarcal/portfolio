import { FiDownload } from 'react-icons/fi';
import { BiEnvelope } from 'react-icons/bi';
import { HiOutlineGlobeAlt } from 'react-icons/hi';


import { NavLink } from 'react-router-dom'

import ana from '../assets/img/ana.jpg'

import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='presentation'>
        <img src={ana} alt="Ana" className='ana'/>
          <div className='slogan'>
            <h1>Desenvolvedora Full-Stack</h1>
            <h1>Transformando <span className='highlight'>ideias</span> em <span className='highlight'>soluções</span></h1>
            <div className="buttons">
              <a href="Desenvolvedora Full-Stack  Ana Luiza Marçal Freitas.pdf" download className="download-btn">
                <FiDownload style={{ marginRight: '8px' }} />
                Meu Currículo
              </a>
              <NavLink to="/contact">
                <BiEnvelope style={{ marginRight: '5px' }} />
                Fale comigo
              </NavLink>
              <NavLink to="/projects">
              <HiOutlineGlobeAlt size={20} style={{ marginRight: '5px' }} />
                Explore Meus Projetos
              </NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home