import { useState } from 'react'
import { Link } from 'react-router-dom'

const BookReviewForm = ({book, currentUser}) => {

    const addReview = () => {
        
    }

    return(
        <div>
            <h4>review '{book.title}':</h4>
            <form className="review-form">
                <input type="text" 
                       name="subject"
                       placeholder={"subject"}/>
                <input type="text" 
                       name="review-text" 
                       placeholder="type your review here" />
                <button onClick={addReview}>submit</button>
            </form>
        </div>
    )
}

export default BookReviewForm