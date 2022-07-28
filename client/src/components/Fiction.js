import React from 'react'
import { Link } from 'react-router-dom'

const Fiction = () => {

    return(
        <div>
            <h1>books</h1>
            <div className='books-nav'>
                <Link to="/books" className='nav-vertical-divider'>all</Link>
                <p className='nav-vertical-divider'>fiction</p>
                <Link to="/books/poetry">poetry</Link>
            </div>
        </div>
    )

}

export default Fiction