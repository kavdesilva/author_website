const { Schema } = require('mongoose')

const User = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
        favBooks: [{ type: Schema.Types.ObjectId, ref: 'Book'}],
        wantBooks: [{ type: Schema.Types.ObjectId, ref: 'Book'}], 
        reviews: [{ type: Schema.Types.ObjectId, ref: 'BookReview'}]
    }
)

module.exports = User
