import { Link, useNavigate } from 'react-router-dom'

const Books = (props) => {

    let navigate = useNavigate()

    return(
        <div>
            <h1>books</h1>
            <div className='books-nav'>
                <Link to="/books/fiction" className='nav-vertical-divider'>fiction</Link>
                <Link to="/books/poetry">poetry</Link>
            </div>
            <div className="books-container">
                {
                    props.books.map((book) => (
                        <div key={book._id} className="book-card">
                            <h3>'{book.title}'</h3>
                            <p>genre: {book.genre}</p>
                            <button onClick={() => navigate(`/books/${book._id}`)}>details</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Books