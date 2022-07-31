const Bookshelf = (props) => {

    let currentUser = props.user[0]

    return(
        <div>
            <h1>{props.user[0].username}'s bookshelf</h1>
            <div>
                <h3>favorites</h3>
                <div className="fav books-container">
                {
                    currentUser.favBooks.map((book) => (
                        <div key={book.id} className="book-card">
                            <h3>'{book.title}'</h3>
                            <p>published: {book.datePublished}</p>
                            <p>description: {book.description}</p>
                            <p>genre: {book.genre}</p>
                        </div>
                    ))
                }
            </div>
            </div>
            <div>
                <h3>wishlist</h3>
                <div className="want books-container">
                {
                    currentUser.wantBooks.map((book) => (
                        <div key={book.id} className="book-card">
                            <h3>'{book.title}'</h3>
                            <p>published: {book.datePublished}</p>
                            <p>description: {book.description}</p>
                            <p>genre: {book.genre}</p>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    )

}

export default Bookshelf