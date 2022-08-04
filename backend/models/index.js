const mongoose = require('mongoose')
const { model } = require('mongoose')
const BookSchema = require('./book')
const UserSchema = require('./user')
const BookReviewSchema = require('./bookReview')

const Book = model('Book', BookSchema)
const User = model('User', UserSchema)
const BookReview = model('BookReview', BookReviewSchema)

module.exports = {
  Book,
  User,
  BookReview
}
