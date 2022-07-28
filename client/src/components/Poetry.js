import React from 'react'
import { Link } from 'react-router-dom'

const Poetry = () => {

    return(
        <div>
            <h1>books</h1>
            <div className='books-nav'>
                <Link to="/books" className='nav-vertical-divider'>all</Link>
                <Link to="/books/fiction" className='nav-vertical-divider'>fiction</Link>
                <p>poetry</p>
            </div>
        </div>
    )

}

export default Poetry