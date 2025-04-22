import { useState, useEffect } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// css
import './App.css'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

// components
import Navbar from './components/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode? 'dark' : 'light';
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <>
      <BrowserRouter>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
