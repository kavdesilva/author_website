import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import BookReview from './BookReview'

const BookDetails = (props) => {

    const [book, setBook] = useState([])
    let user = props.user
    let {id} = useParams()

    useEffect(() => {
        async function getBook() {
            const res = await axios.get(`${BASE_URL}/books/${id}`)
            setBook(res.data)
        }
        getBook()
    }, [id])

    return(
        <div>
            <div>
                <h2>'{book.title}'</h2>
                <div className="book-container">
                    <p>published: {book.datePublished}</p>
                    <p>description: {book.description}</p>
                </div>
                <BookReview book={book} user={user}/>
                <button onClick={seeReviews}>click to see reviews</button>
                {
                    reviews.map((review) => (
                        <div key={user.username} className="review-card">
                            <p><Link to="/user/:id">{user.username}</Link> says: <em>'{review.text}'</em></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default BookDetails