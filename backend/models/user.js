const { Schema } = require('mongoose')

const User = new Schema(
    {
        userName: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
        bookshelf: [
          { favBooks: [{ type: Schema.Types.ObjectId, ref: 'Book'}] }, // array goes here
          { wantBooks: [{ type: Schema.Types.ObjectId, ref: 'Book'}] } // array goes here
        ]
    }
)

module.exports = User
