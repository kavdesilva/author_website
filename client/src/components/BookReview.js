import { useState } from 'react'

const BookReview = (props) => {
    const [reviews, setReviews] = useState([])
    const [input, setInput] = useState('')
    let bookReviews = props.book.bookReviews
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
                       required />
                <input type="text" 
                       name="review" 
                       placeholder="type your review here" 
                       value={input}required />
                <button onClick={addReview}>submit</button>
            </form>
            <button onClick={seeReviews}>click to see reviews</button>
            {
                reviews.map((review) => (
                    <div key={review.username} className="review-card">
                        <p>{review.username}: <em>'{review.review}'</em></p>
                    </div>
                ))
            }
        </div>
    )
}

export default BookReview