const db = require('../db')
const { Publisher, Book } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const penguinBooks = await Publisher.find({ name: 'Penguin Books' })
  const harperCollins = await Publisher.find({ name: 'HarperCollins' })

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
