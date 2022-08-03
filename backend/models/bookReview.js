const { Schema } = require('mongoose')

const BookReview = new Schema(
    {
        book: { type: Schema.Types.ObjectId, ref: 'Book'},
        username: { type: Schema.Types.ObjectId, ref: 'User' },
        text: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = BookReview