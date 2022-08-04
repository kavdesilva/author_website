import { useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import BookReviewForm from './BookReviewForm'

const BookDetails = ({ currentUser }) => {

    let navigate = useNavigate
    
    let initialFormState = {
        user: '',
        title: '',
        text: '',
        rating: ''
    }

    const [book, setBook] = useState([])
    const [formState, setFormState] = useState(initialFormState)
    // const [editing, setEditing] = useState(false)

    let {id} = useParams()
    useEffect(() => {
        async function getBook() {
            const res = await axios.get(`${BASE_URL}/books/${id}`)
            setBook(res.data)
        }
        getBook()
    }, [id])

    const addReview = async () => {
        // let res = await axios.post(`${BASE_URL}/books/${id}/reviews`, { ...formState, book: book._id, user: currentUser.username})
        book.bookReviews.push(formState)
    }

    // const updateReview = async (index) => {
    //     let res = await axios.put(`${BASE_URL}/books/${id}/reviews`, { ...formState._id, formState})
    //     book.bookReviews.push(formState)
    // }

    const editReview = (review, index) => {
        setFormState(review)
        navigate(`/books/${book._id}`, {state: {index: index}})
    }

    const deleteReview = async (reviewId, index) => {
        // await axios.delete(`${BASE_URL}/bookreviews/${reviewId}`)
        book.bookReviews.splice(index)
        navigate(`/books/${book?._id}`)
    }
    // ^^ while I can get addReview to work with the axios call and on the DOM, update, edit and delete are pretty non-functional no matter what I try.

    const reviewHandleSubmit = async (event, index) => {
        event.preventDefault()
        await addReview(event)
        setFormState(initialFormState)
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
                <h3>reviews</h3>
                {(book?.bookReviews.length === 0) ? (
                    <h4>sorry, no one has reviewed this book yet.</h4>
                ):(
                    <div>
                        {
                            book?.bookReviews.map((review) => (
                                <div key={review._id} className="review-card">
                                    <h4>{review.user} said:</h4>
                                    <p>'{review.text}'</p>
                                    <p>{review.rating}</p>
                                    <button onClick={deleteReview}>delete</button>
                                    <button onClick={editReview}>edit</button>
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