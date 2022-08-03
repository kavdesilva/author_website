import { Link, useNavigate } from 'react-router-dom'

const Poetry = ({poetryBooks, currentUser}) => {

    let navigate = useNavigate()

    return(
        <div>
            <h1>books</h1>
            <div className='books-nav'>
                <Link to="/books/fiction" className='nav-vertical-divider'>fiction</Link>
                <p className='genre-select'>poetry</p>
            </div>
            <div className="books-container">
                {
                    poetryBooks.map((book) => (
                        <div key={book._id} className="book-card">
                            <h3>{book.title}</h3>
                            <p>genre: {book.genre}</p>
                            <button onClick={() => navigate(`/books/${book._id}`)}>details</button>
                            <button onClick={() => {currentUser.favBooks.push(book); alert('added to favorites!')}}>add to favorites</button>
                            <button onClick={() => {currentUser.wantBooks.push(book); alert('added to wishlist!')}}>add to wishlist</button>
                        </div>
                    ))
                }
            </div>
            <Link to="/books">back to all books</Link>
        </div>
    )

}

export default Poetry