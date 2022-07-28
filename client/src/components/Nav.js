import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return(
        <div>
            <nav>
                <h4>sheila b. back | official website</h4>
                <Link to="/">home</Link>
                <Link to="/books">books</Link>
                <Link to="/about">about</Link>
            </nav>
        </div>
    )

}

export default Nav