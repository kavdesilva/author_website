import React from 'react'
import { Link } from 'react-router-dom'

const Books = () => {

    return(
        <div>
            <h1>books</h1>
            <Link to="/books/fiction">fiction</Link>
            <Link to="/books/poetry">poetry</Link>
        </div>
    )

}

export default Books