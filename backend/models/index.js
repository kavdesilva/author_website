const mongoose = require('mongoose')
const { model } = require('mongoose')
const BookSchema = require('./book')
const UserSchema = require('./user')

const Book = model('Book', BookSchema)
const User = model('User', UserSchema)

module.exports = {
  Book,
  User
}
