const { Schema } = require('mongoose')

const Book = new Schema(
    {
        title: { type: String, required: true },
        datePublished: { type: String, required: true },
        description: { type: String, required: true },
        genre: { type: String, required: true },
        bookReviews: [{ type: Schema.Types.ObjectId, ref: 'bookReview' }]
    }
)

module.exports = Book
