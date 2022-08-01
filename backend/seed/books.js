const db = require('../db')
const { Book } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const books = [
    {
        title: 'red is the rabbit',
        datePublished: '1995',
        description: 'fluffy bunny meets bushel of raspberries.',
        genre: 'fiction',
        bookReviews: [{
          username: 'kristina',
          review: 'this is my first book review. i love raspberries and rabbits.'
        }],
        bookshelfNotes: [{
          username: 'kristina',
          note: 'this is a note on a book on my bookshelf.',
        }]
    },
    {
        title: 'dish and spoon: a love story',
        datePublished: '1998',
        description: 'a forbidden romance between cutlery who should never have met.',
        genre: 'fiction',
        bookReviews: [],
        bookshelfNotes: []
    },
    {
        title: 'flight of the rhinoceros and other poems',
        datePublished: '1996',
        description: 'a collection of poems capturing the magic of movement in the wild',
        genre: 'poetry',
        bookReviews: [{
          username: 'kristina',
          review: `this is my second book review. i love rhinos and the letter 'r'.`
        }],
        bookshelfNotes: [{
          username: 'kristina',
          note: 'this is another note on a book on my bookshelf.',
        }]
    },
    {
        title: 'waltzing walruses',
        datePublished: '2001',
        description: `another collection of poems from the author who brought you 'flight of the rhinoceros'`,
        genre: 'poetry',
        bookReviews: [],
        bookshelfNotes: []
    },
    {
        title: 'flamingo, flamenco',
        datePublished: '2004',
        description: `dance and the natural world meet again in this collection of poems by the author of 'flight of the rhinoceros' and 'waltzing walruses'`,
        genre: 'poetry',
        bookReviews: [],
        bookshelfNotes: []
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
