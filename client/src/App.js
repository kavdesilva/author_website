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
  const [book, setBook] = useState([])
  const [poetryBooks, setPoetryBooks] = useState([])
  const [fictionBooks, setFictionBooks] = useState([])
  const [users, setUsers] = useState([])

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
    async function getUsers() {
      const res = await axios.get(`${BASE_URL}/users`)
      setUsers(res.data)
    }
    getUsers()
  }, [])

  let currentUser = users[0]

  return (
    <div className="App">
      <header className="header">
        <Nav currentUser={currentUser}/>
      </header>
      <main>
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/books' element= {<Books books={books} currentUser={currentUser}/>} />
          <Route path='/books/:id' element={<BookDetails currentUser={currentUser}/>}/>
          <Route path='/books/poetry' element= {<Poetry poetryBooks={poetryBooks} currentUser={currentUser}/>} />
          <Route path='/books/fiction' element= {<Fiction fictionBooks={fictionBooks} currentUser={currentUser}/>} />
          <Route path='/about' element= {<About />} />
          <Route path='/users/:id' element= {<User />} />
          <Route path='/users/:id/bookshelf' element= {<Bookshelf currentUser={currentUser}/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
