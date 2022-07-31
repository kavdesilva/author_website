import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return(
        <div>
            <nav className='main-nav'>
                <h3>sheila b. bach | official website</h3>
                <Link to="/" className='nav-vertical-divider'>home</Link>
                <Link to="/books" className='nav-vertical-divider'>books</Link>
                <Link to="/about">about</Link>
            </nav>
        </div>
    )

}

export default Nav