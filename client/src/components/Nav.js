import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({currentUser}) => {

    return(
        <div>
            <nav className='main-nav'>
                <h3>sheila b. bach | official website</h3>
                <Link to="/" className='nav-vertical-divider'>home</Link>
                <Link to="/books" className='nav-vertical-divider'>books</Link>
                <Link to="/about" className='nav-vertical-divider'>about</Link>
                <Link to={`/users/${currentUser?._id}/bookshelf`}>bookshelf</Link>
                {/* ^^ when I reload the page, this breaks the entire app. the api call gets interrupted by the loading of the url, I'm not sure how to fix this. */}
            </nav>
        </div>
    )

}

export default Nav