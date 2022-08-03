const { Schema } = require('mongoose')

const BookReview = new Schema(
    {
        username: { type: Schema.Types.ObjectId, ref: 'User' },
        text: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = BookReview