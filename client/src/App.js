import './styles/App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from './globals'
import Nav from './components/Nav'
import Home from './components/Home'
import Books from './components/Books'
import BookDetails from './components/BookDetails'
import Fiction from './components/Fiction'
import Poetry from './components/Poetry'
import Bookshelf from './components/Bookshelf'
import About from './components/About'
import User from './components/User'

// import components below

function App() {
// functions go here

  const [books, setBooks] = useState([])
  const [poetryBooks, setPoetryBooks] = useState([])
  const [fictionBooks, setFictionBooks] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    async function getBooks() {
        const res = await axios.get(`${BASE_URL}/books`)
        setBooks(res.data)
    }
    getBooks()
  }, [])

  useEffect(() => {
    async function getPoetryBooks() {
        const res = await axios.get(`${BASE_URL}/books/poetry`)
        setPoetryBooks(res.data)
    }
    getPoetryBooks()
  }, [])

  useEffect(() => {
    async function getFictionBooks() {
        const res = await axios.get(`${BASE_URL}/books/fiction`)
        setFictionBooks(res.data)
    }
    getFictionBooks()
  }, [])

  useEffect(() => {
    async function getUser() {
      const res = await axios.get(`${BASE_URL}/user`)
      setUser(res.data)
    }
    getUser()
  }, [])

  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/books' element= {<Books books={books} user={user}/>} />
          <Route path='/books/:id' element={<BookDetails user={user}/>}/>
          <Route path='/books/poetry' element= {<Poetry poetryBooks={poetryBooks}/>} />
          <Route path='/books/fiction' element= {<Fiction fictionBooks={fictionBooks}/>} />
          <Route path='/about' element= {<About />} />
          <Route path='/user/:id/bookshelf' element= {<Bookshelf user={user}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
