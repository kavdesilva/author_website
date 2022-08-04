import { useNavigate } from "react-router-dom"

const Bookshelf = ({currentUser}) => {

    let navigate = useNavigate()

    const confirmFavRemove = () => {
        window.confirm('are you sure you want to remove this book from your favorites?')
        navigate(`/users/${currentUser?._id}/bookshelf`)
    }

    const confirmWantRemove = () => {
        window.confirm('are you sure you want to remove this book from your wishlist?')
        navigate(`/users/${currentUser?._id}/bookshelf`)
    }

    return(
        <div>
            <h1>{currentUser.username}'s bookshelf</h1>
            <div>
                <h3>favorites</h3>
                <div className="fav books-container">
                {
                    currentUser.favBooks.map((book, index) => (
                        <div key={book._id} className="book-card">
                            <h3>'{book.title}'</h3>
                            <p>published: {book.datePublished}</p>
                            <p>description: {book.description}</p>
                            <p>genre: {book.genre}</p>
                            <button onClick={() => {currentUser.favBooks.splice(index); confirmFavRemove()}}>remove</button>
                        </div>
                    ))
                }
                </div>
            </div>
            <div>
                <h3>wishlist</h3>
                <div className="want books-container">
                {
                    currentUser.wantBooks.map((book, index) => (
                        <div key={book._id} className="book-card">
                            <h3>'{book.title}'</h3>
                            <p>published: {book.datePublished}</p>
                            <p>description: {book.description}</p>
                            <p>genre: {book.genre}</p>
                            <button onClick={() => {currentUser.wantBooks.splice(index); confirmWantRemove()}}>remove</button>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className="user-reviews">
                <h3>{currentUser.username}'s reviews</h3>
                {
                    currentUser.reviews.map((review) => (
                        <div key={review._id} className="review-card">
                            <h3>'{review.username}':</h3>
                            <p>{review.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Bookshelf