const { Schema } = require('mongoose')

const BookReview = new Schema(
    {
        book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
        user: { type: String, required: true },
        title: { type: String, required: true },
        text: { type: String, required: true  },
        rating: {type: Number, required: true }
    },
    { timestamps: true }
)

module.exports = BookReview
