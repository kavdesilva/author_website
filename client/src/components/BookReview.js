import { useState } from 'react'
import { Link } from 'react-router-dom'

const BookReview = (props) => {
    const [reviews, setReviews] = useState([])
    const [input, setInput] = useState('')
    let bookReviews = props.book.bookReviews
    let user = props.user
    console.log(bookReviews)

    const seeReviews = () => {
        let array = [...bookReviews]
        setReviews(array)
    }

    const addReview = () => {
        
    }

    return(
        <div>
            <form className="review-form">
                <input type="text" 
                       name="username"
                       placeholder="username" 
                       value={input} 
                       required>{user.username}</input>
                <input type="text" 
                       name="review-text" 
                       placeholder="type your review here" 
                       value={input}required />
                <button onClick={addReview}>submit</button>
            </form>
            <button onClick={seeReviews}>click to see reviews</button>
            {
                reviews.map((review) => (
                    <div key={user.username} className="review-card">
                        <p><Link to="/user/:id">{user.username}</Link> says: <em>'{review.text}'</em></p>
                    </div>
                ))
            }
        </div>
    )
}

export default BookReview