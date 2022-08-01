const { Schema } = require('mongoose')

const Book = new Schema(
    {
        title: { type: String, required: true },
        datePublished: { type: String, required: true },
        description: { type: String, required: true },
        genre: { type: String, required: true },
        bookReviews: [{
            username: {type: String, required: false },
            review: { type: String, required: false },
        }, {
            timestamps: {
                createdAt: 'created_at',
                updatedAt: 'updated_at'
            }
        }],
        bookshelfNotes: [{
            username: {type: String, required: false },
            note: { type: String, required: false },
        }, {
            timestamps: {
                createdAt: 'created_at',
                updatedAt: 'updated_at'
            }
        }]
    }
)

module.exports = Book
