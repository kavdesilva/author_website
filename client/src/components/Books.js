import { Link, useNavigate } from 'react-router-dom'

const Books = (props) => {

    let currentUser = props.user[0]
    let navigate = useNavigate()
    console.log(props.books)

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
                            {/* 08/01/2022 - ^^^ this was the problem i was running into with my forms yesterday. although data would populate on the DOM (at least temporarily), it was a superficial placement of the input data. nothing was actually being stored in the db. i've fleshed out the routes& components to address this, but still needs more work. */}
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Books