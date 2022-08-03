import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import BookReviewForm from './BookReviewForm'

const BookDetails = ({ currentUser }) => {

    const [book, setBook] = useState([])

    let {id} = useParams()
    useEffect(() => {
        async function getBook() {
            const res = await axios.get(`${BASE_URL}/books/${id}`)
            setBook(res.data)
        }
        getBook()
    }, [id])

    return(
        <div className="book-details-container">
            <h2>'{book.title}'</h2>
            <p>published: {book.datePublished}</p>
            <p>description: {book.description}</p>

            <BookReviewForm book={book} currentUser={currentUser}/>
            {
                book.bookReviews.map((review) => (
                    <div key={review._id} className="review-card">
                        <h4><Link to={`/user/${review.user._id}`}>{review.user.username}</Link> said:</h4>
                        <p>'{review.text}'</p>
                    </div>
                ))
            }
        </div>
    )

}

export default BookDetails