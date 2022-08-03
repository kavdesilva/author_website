const { Schema } = require('mongoose')

const BookReview = new Schema(
    {
        book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        text: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = BookReview