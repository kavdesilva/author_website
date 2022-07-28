import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        async function getBooks() {
            const res = await axios.get(`${BASE_URL}/books`)
            console.log(res)
            setBooks(res.data.books)
        }
        getBooks()
    }, [])

    return(
        <div>
            <h1>books</h1>
            <div className='books-nav'>
                <p className='nav-vertical-divider'>all</p>
                <Link to="/books/fiction" className='nav-vertical-divider'>fiction</Link>
                <Link to="/books/poetry">poetry</Link>
            </div>
        </div>
    )

}

export default Books