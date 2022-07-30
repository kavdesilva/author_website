import React from 'react'
import { Link } from 'react-router-dom'

const Poetry = (props) => {

    return(
        <div>
            <h1>books</h1>
            <div className='books-nav'>
                <Link to="/books/fiction" className='nav-vertical-divider'>fiction</Link>
                <p className='genre-select'>poetry</p>
            </div>
            <div className="books-container">
                {
                    props.poetryBooks.map((book) => (
                        <div key={book.id} className="book-card">
                            <h3>{book.title}</h3>
                            <p>published: {book.datePublished}</p>
                            <p>description: {book.description}</p>
                            <p>genre: {book.genre}</p>
                        </div>
                    ))
                }
            </div>
            <Link to="/books">back to all books</Link>
        </div>
    )

}

export default Poetry