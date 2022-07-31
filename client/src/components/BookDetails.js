import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import BookReview from './BookReview'

const BookDetails = () => {

    const [book, setBook] = useState('')

    let {id} = useParams()

    useEffect(() => {
        async function getBook() {
            const res = await axios.get(`${BASE_URL}/books/${id}`)
            setBook(res.data)
        }
        getBook()
    }, [id])

    console.log(book)

    return(
        <div>
            <div>
                <h2>'{book.title}'</h2>
                <div className="book-container">
                    <p>published: {book.datePublished}</p>
                    <p>description: {book.description}</p>
                    <button>add review</button>
                </div>
                <BookReview />
            </div>
        </div>
    )

}

export default BookDetails