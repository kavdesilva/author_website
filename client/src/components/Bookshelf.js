import { useNavigate } from "react-router-dom"
const Bookshelf = (props) => {

    let currentUser = props.user[0]
    let navigate = useNavigate()

    const confirmFavRemove = () => {
        window.confirm('are you sure you want to remove this book from your favorites?')
        navigate('/user/bookshelf')
    }

    const confirmWantRemove = () => {
        window.confirm('are you sure you want to remove this book from your wishlist?')
        navigate('/user/bookshelf')
    }

    return(
        <div>
            <h1>{props.user[0].username}'s bookshelf</h1>
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
                            <button onClick={() => {currentUser.favBooks.splice(index); confirmFavRemove()}}>remove from favorites</button>
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
                            <button onClick={() => {currentUser.wantBooks.splice(index); confirmWantRemove()}}>remove from wishlist</button>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    )

}

export default Bookshelf