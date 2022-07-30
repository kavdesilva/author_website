import React from 'react'
import { Link } from 'react-router-dom'

const Fiction = (props) => {

    return(
        <div>
            <h1>books</h1>
            <div className='books-nav'>
                <p className='nav-vertical-divider genre-select'>fiction</p>
                <Link to="/books/poetry">poetry</Link>
            </div>
            <div className="books-container">
                {
                    props.fictionBooks.map((book) => (
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

export default Fiction