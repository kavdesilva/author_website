import { useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import BookReviewForm from './BookReviewForm'

const BookDetails = ({ currentUser }) => {

    let navigate = useNavigate
    
    let initialFormState = {
        title: '',
        text: '',
        rating: ''
    }

    const [book, setBook] = useState([])
    const [formState, setFormState] = useState(initialFormState)
    const [editing, setEditing] = useState(false)

    let {id} = useParams()
    useEffect(() => {
        async function getBook() {
            const res = await axios.get(`${BASE_URL}/books/${id}`)
            setBook(res.data)
        }
        getBook()
    }, [id])

    const addReview = async () => {
        let res = await axios.post(`${BASE_URL}/books/${id}/reviews`, { ...formState, book: book._id, user: currentUser._id})
        book.bookReviews.push(res.data)
    }

    const updateReview = async (index) => {
        let res = await axios.post(`${BASE_URL}/books/${id}/reviews`, { ...formState._id, formState})
        book.bookReviews.push(res.data)
    }

    const reviewHandleSubmit = async (event, index) => {
        event.preventDefault()
        if (editing === false) {
            await addReview()
        } else {
            await updateReview(index)
        }
        setFormState(initialFormState)
        setEditing(false)
        navigate(`/books/${book?._id}`)
    }

    const reviewHandleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
      }

    return(
        <div className="book-details-container">
            <h2>'{book.title}'</h2>
            <p>published: {book.datePublished}</p>
            <p>description: {book.description}</p>

            <BookReviewForm book={book} 
                            currentUser={currentUser} 
                            reviewHandleSubmit={reviewHandleSubmit}
                            reviewHandleChange={reviewHandleChange}
                            formState={formState}/>
            <div className='reviews-container'>
                {(book.bookReviews.length === 0) ? (
                    <h3>sorry, no one has reviewed this book yet.</h3>
                ):(
                    <div>
                        {
                            book.bookReviews.map((review) => (
                                <div key={review._id} className="review-card">
                                    <h4><Link to={`/user/${review.user._id}`}>{review.user.username}</Link> said:</h4>
                                    <p>'{review.text}'</p>
                                </div>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    )

}

export default BookDetails