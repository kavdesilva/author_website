import { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const User = () => {
    
    const [user, setUser] = useState([])

    let {id} = useParams()
    useEffect(() => {
        async function getUser() {
            const res = await axios.get(`${BASE_URL}/users/${id}`)
            setUser(res.data)
        }
        getUser()
    }, [id])

    return(
        <div className="user-details-container">
            <h2>{user.username}'s bookshelf</h2>
            <div>
                <h3>favorites</h3>
                <div className="fav books-container">
                {
                    user.favBooks.map((book, index) => (
                        <div key={book._id} className="book-card">
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
                    user.wantBooks.map((book, index) => (
                        <div key={book._id} className="book-card">
                            <h3>'{book.title}'</h3>
                            <p>published: {book.datePublished}</p>
                            <p>description: {book.description}</p>
                            <p>genre: {book.genre}</p>
                        </div>
                    ))
                }
                </div>
            </div>
            <h2>{user.username}'s reviews</h2>
            {
                user.reviews.map((review) => (
                    <div key={review._id} className="review-card">
                        <h4>{review.user.username} reviewed <Link to={`/books/${review.book._id}`}>{review.book.title}</Link>:</h4>
                        <p>'{review.text}'</p>
                    </div>
                ))
            }
        </div>
    )
}

export default User