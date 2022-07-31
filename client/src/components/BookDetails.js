import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

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
                <h3>'{book.title}'</h3>
                <div className="book-container">
                    <p>published: {book.datePublished}</p>
                    <p>description: {book.description}</p>
                </div>
            </div>
        </div>
    )

}

export default BookDetails