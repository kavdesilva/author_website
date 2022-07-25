const db = require('../db')
const { Book } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const books = [
    {
        title: '',
        datePublished: '',
        description: '',
        genre: ['','',''], 
        id: ''
    },
    {
        title: '',
        datePublished: '',
        description: '',
        genre: ['','',''], 
        id: ''
    },
    {
        title: '',
        datePublished: '',
        description: '',
        genre: ['','',''], 
        id: ''
    },
    {
        title: '',
        datePublished: '',
        description: '',
        genre: ['','',''], 
        id: ''
    },
    {
        title: '',
        datePublished: '',
        description: '',
        genre: ['','',''], 
        id: ''
    }
  ]
  await Book.insertMany(books)
  console.log('created books')
}

const run = async () => {
  await main()
  db.close()
}

run()
