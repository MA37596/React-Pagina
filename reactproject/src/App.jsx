import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import About from './pages/About'
import Games from './pages/Games'
import Contact from './Contact'
import Top10 from './pages/Top10'
import AboutMe from './Aboutme'
import CookieClicker from './Cookieclicker'
import Pokemon from './Pokemon'
import Top10List from './Top10item'
import GalleryComponent from './GalleryComponent'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/cookieclicker" element={<CookieClicker />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/top10" element={<Top10List />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<GalleryComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
