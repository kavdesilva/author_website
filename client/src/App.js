import './styles/App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Books from './components/Books'
import Fiction from './components/Fiction'
import Poetry from './components/Poetry'
import About from './components/About'

// import components below

function App() {
// functions go here

  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/books' element= {<Books />} />
          <Route path='/books/poetry' element= {<Poetry />} />
          <Route path='/books/fiction' element= {<Fiction />} />
          <Route path='/about' element= {<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
