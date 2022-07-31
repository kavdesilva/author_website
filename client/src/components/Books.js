import { Link, useNavigate } from 'react-router-dom'

const Books = (props) => {

    let currentUser = props.user[0]
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
                            <button onClick={() => {currentUser.favBooks.push(book); alert('added to favorites!')}}>add to favorites</button>
                            <button onClick={() => {currentUser.wantBooks.push(book); alert('added to wishlist!')}}>add to wishlist</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Books