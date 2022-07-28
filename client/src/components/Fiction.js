import React from 'react'
import { Link } from 'react-router-dom'

const Fiction = () => {

    return(
        <div>
            <h1>books</h1>
            <p>fiction</p>
            <Link to="/books/poetry">poetry</Link>
        </div>
    )

}

export default Fiction