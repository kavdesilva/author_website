import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return(
        <div>
            <Link to="/">home</Link>
            <Link to="/books">books</Link>
            <Link to="/about">about</Link>
        </div>
    )

}

export default Nav