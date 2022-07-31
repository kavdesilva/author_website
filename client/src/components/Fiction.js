import { Link, useNavigate } from 'react-router-dom'

const Fiction = (props) => {

    let navigate = useNavigate()

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
                        <div key={book._id} className="book-card">
                            <h3>'{book.title}'</h3>
                            <p>genre: {book.genre}</p>
                            <button onClick={() => navigate(`/books/${book._id}`)}>details</button>
                        </div>
                    ))
                }
            </div>
            <Link to="/books">back to all books</Link>
        </div>
    )

}

export default Fiction