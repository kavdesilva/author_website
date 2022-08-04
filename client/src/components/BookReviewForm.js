import { useLocation } from 'react-router-dom'

const BookReviewForm = ({book, currentUser, reviewHandleSubmit, reviewHandleChange, formState}) => {
    
    let location = useLocation()

    return(
        <div>
            <h4>review '{book.title}':</h4>
            <form onSubmit={(e) => reviewHandleSubmit(e, location.state.index)} className="review-form">
                <input value={formState.title}
                       type="text" 
                       name="title"
                       placeholder="title"
                       onChange={reviewHandleChange}
                       required/>
                <input value={formState.text}
                       type="text" 
                       name="text" 
                       placeholder="type your review here" 
                       onChange={reviewHandleChange}
                       required/>
                <select defaultValue={formState.rating} name="rating" onChange={reviewHandleChange} required>
                    <option value="" disabled hidden>Rating</option>
                    <option value={1} >1</option>
                    <option value={2} >2</option>
                    <option value={3} >3</option>
                    <option value={4} >4</option>
                    <option value={5} >5</option>
                </select>
                <button>submit</button>
            </form>
        </div>
    )
}

export default BookReviewForm