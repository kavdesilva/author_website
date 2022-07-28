import React from 'react'
import { Link } from 'react-router-dom'

const Poetry = () => {

    return(
        <div>
            <h1>books</h1>
            <Link to="/books/fiction">fiction</Link>
            <p>poetry</p>
        </div>
    )

}

export default Poetry