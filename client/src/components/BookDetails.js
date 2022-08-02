import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import BookReview from './BookReview'

const BookDetails = () => {

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
            </div>
        </div>
    )

}

export default BookDetails