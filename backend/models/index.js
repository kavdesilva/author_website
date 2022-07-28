const { model } = require('mongoose')
const BookSchema = require('./books')
const UserSchema = require('./users')

const Book = model('Book', BookSchema)
const User = model('User', UserSchema)

module.exports = {
  Book,
  User
}
