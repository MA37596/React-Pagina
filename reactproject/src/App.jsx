import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import About from './pages/About'
import Games from './pages/Games'
import Contact from './Contact'
import Top10 from './pages/Top10'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/top10" element={<Top10 />} />
            <Route path="/games" element={<Games />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App
