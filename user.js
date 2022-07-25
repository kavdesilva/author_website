const { Schema } = require('mongoose')

const User = new Schema(
    {
        userName: { type: String, required: true },
        password: { type: String, required: true },
        bookshelf: [
          {
            shelfName: 'Favorites',
            books: [{ type: Schema.Types.ObjectId, ref: 'Book'}] // array goes here
          },
          {
            shelfName: 'Want to Read',
            books: [{ type: Schema.Types.ObjectId, ref: 'Book'}] // array goes here
          }
        ]
    }
)

module.exports = User
