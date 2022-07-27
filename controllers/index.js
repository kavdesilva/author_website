const { Book, User } = require('..models')

// functions for data retrieval, form inputs, etc. go below.

const getAllBooks = async(req,res) => {
  try {
    const books = await Book.find()
    return books
  } catch (error) {
    return }
}

const getPoetryBooks = () => {
  
}

const getFictionBooks = () => {
  
}

const getBookById = () => {
  
}

const getBookshelf = () => {
  
}

const addFavBook = () => {
  
}

const addWantBook = () => {
  
}

const getFavBooks = () => {
  
}

const getWantBooks = () => {
  
}
