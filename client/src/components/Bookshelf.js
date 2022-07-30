const Bookshelf = (props) => {

    return(
        <div>
            <h1>{props.user[0].userName}'s bookshelf</h1>
            <div>
                <h3>favorites</h3>
                <div className="fav books-container">
                {/* {
                    props.favBooks.map((book) => (
                        <div key={book.id} className="book-card">
                            <h3>'{book.title}'</h3>
                            <p>published: {book.datePublished}</p>
                            <p>description: {book.description}</p>
                            <p>genre: {book.genre}</p>
                        </div>
                    ))
                } */}
            </div>
            </div>
            <div>
                <h3>wishlist</h3>
                <div className="want books-container">
                {/* {
                    props.wantBooks.map((book) => (
                        <div key={book.id} className="book-card">
                            <h3>'{book.title}'</h3>
                            <p>published: {book.datePublished}</p>
                            <p>description: {book.description}</p>
                            <p>genre: {book.genre}</p>
                        </div>
                    ))
                } */}
            </div>
            </div>
        </div>
    )

}

export default Bookshelf