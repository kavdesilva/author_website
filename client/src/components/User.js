import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import BookReviewForm from './BookReviewForm'

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
            {
                book.bookReviews.map((review) => (
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