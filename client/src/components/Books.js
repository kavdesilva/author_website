import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Books = (props) => {

    // let navigate = useNavigate()

    // const selectBook = (book) => {
    //     navigate(`/books/${book.id}`)
    // }

    return(
        <div>
            <h1>books</h1>
            <div className='books-nav'>
                <Link to="/books/fiction" className='nav-vertical-divider'>fiction</Link>
                <Link to="/books/poetry">poetry</Link>
            </div>
            <div className="books-container">
                {
                    props.books.map((book) => (
                        <div key={book.id} className="book-card">
                            <h3>'{book.title}'</h3>
                            <p>published: {book.datePublished}</p>
                            <p>description: {book.description}</p>
                            <p>genre: {book.genre}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Books