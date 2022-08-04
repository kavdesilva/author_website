const { Router } = require('express');
const { Book, User, BookReview } = require('../models')
const router = Router();

router.get('/', (req, res) => {
  res.send({ msg: 'server running' })
})

// book routes
router.get('/books', async(req,res) => {
  try {
    const books = await Book.find()
    res.send(books)
  } catch (error) {
    throw error
  }
})

 router.get('/books/poetry', async(req,res) => {
  try {
    const poetryBooks = await Book.find({genre: 'poetry'})
    res.send(poetryBooks)
  } catch (error) {
    throw error
  }
})

router.get('/books/fiction', async(req,res) => {
  try {
    const fictionBooks = await Book.find({genre: 'fiction'})
    res.send(fictionBooks)
  } catch (error) {
    throw error
  }
})

router.get('/books/:id', async(req,res) => {
  try {
    const book = await Book.findById(req.params.id).populate('bookReviews')
    res.send(book)
  } catch (error) {
    throw error
  }
})


router.post('/books/:id/reviews', async(req,res) => {
  try{
    const book = await Book.findById(req.params.id)
    let newBookReview = await BookReview.create(req.body)
    book.bookReviews.push(newBookReview._id)
    book.save()
    res.send(newBookReview)
  } catch (error) {
    throw error
  }
})

// book review routes
router.get('/bookReviews', async (req, res) => {
  try{
    const bookReviews = await BookReview.find({})
    res.send(bookReviews)
  } catch (error) {
    throw error
  }
})

router.get('/bookReviews/:id', async (req, res) => {
  let bookReview = await BookReview.findById(req.params.id).populate('book')
  res.send(bookReview)
})

router.put('/bookReviews/:id', async (req, res) => {
  let updatedReview = await BookReview.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.send(updatedReview)
})

router.delete('/bookReviews/:id', async (req, res) => {
  let deletedRecord = await BookReview.findByIdAndDelete(req.params.id)
  res.send(deletedRecord)
})

// user routes 
router.get('/users', async(req,res) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch (error) {
    throw error
  }
})

router.get('/users/:id', async(req,res) => {
  try {
    const user = await User.findById(req.params.id)
    res.send(user)
  } catch (error) {
    throw error
  }
})

module.exports = router;
