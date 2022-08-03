import { useState } from 'react'
import { Link } from 'react-router-dom'

const BookReviewForm = ({book, currentUser}) => {

    const addReview = () => {
        
    }

    return(
        <div>
            <h4>review of '{book.review}'</h4>
            <form className="review-form">
                <input type="text" 
                       name="username"
                       placeholder="username" 
                       value={input} 
                       required>{currentUser.username}</input>
                <input type="text" 
                       name="review-text" 
                       placeholder="type your review here" 
                       value={input}required />
                <button onClick={addReview}>submit</button>
            </form>
        </div>
    )
}

export default BookReviewForm