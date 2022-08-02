const { Router } = require('express');
const { Book, User } = require('../models')
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => {
  res.send({ msg: 'server running' })
})

router.get('/user', async(req,res) => {
  try {
    let users = await User.find({})
    res.send(users)
  } catch (error){
    throw error
  }
})

// router.get('/user/bookshelf', async(req,res) => { }) // 08/01/2022 - initially I left this in the comments, thinking I wouldn't use it within the project parameters. looking back, I have no idea why.

// router.post('/user/bookshelf', controllers.addFavBook, controllers.addWantBook) // this probably has to be two different routes?

// router.get('/user/bookshelf', controllers.getFavBooks, controllers.getWantBooks)

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
    const { id } = req.params
    const book = await Book.findById(id)
    res.send(book)
  } catch (error) {
    throw error
  }
})

router.get('/user/:id', async(req,res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    res.send(user)
  } catch (error) {
    throw error
  }
})

module.exports = router;
