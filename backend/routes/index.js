const { Router } = require('express');
const { Book } = require('../models')
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => {
  res.send({ msg: 'server running' })
})

// router.post('/bookshelf', controllers.addFavBook, controllers.addWantBook) // this probably has to be two different routes?

// router.get('/bookshelf', controllers.getBookshelf)

// router.get('/bookshelf/favBooks', controllers.getFavBooks)

// router.get('/bookshelf/wantBooks', controllers.getWantBooks)

router.get('/books', async(req,res) => {
  try {
    const books = await Book.find()
    res.send(books)
  } catch (error) {
    throw error}
})

 router.get('/books/poetry', async(req,res) => {
  try {
    const poetryBooks = await Book.find({genre: 'poetry'})
    res.send(poetryBooks)
  } catch (error) {
    throw error}
})

router.get('/books/fiction', async(req,res) => {
  try {
    const fictionBooks = await Book.find({genre: 'fiction'})
    res.send(fictionBooks)
  } catch (error) {
    throw error}
})

router.get('/books/:id', async(req,res) => {
  try {
    const { id } = req.params
    const book = await Book.findById(id)
    res.send(book)
  } catch (error) {
    throw error}
})

module.exports = router;
