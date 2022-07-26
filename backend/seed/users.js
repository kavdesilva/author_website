const db = require('../db')
const { User, Book } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const users = [
    {
      username: 'kristina',
      password: 'password1',
      email: 'kristinaEmail@email.com',
      favBooks: [], 
      wantBooks: [],
      reviews: [],
      bookshelfNotes: []
    },
    {
      username: 'dolores',
      password: 'password1',
      email: 'doloresEmail@email.com',
      favBooks: [], 
      wantBooks: [],
      reviews: [],
      bookshelfNotes: []
    },
    {
      username: 'charlotte',
      password: 'password1',
      email: 'charlotteEmail@email.com',
      favBooks: [], 
      wantBooks: [],
      reviews: [],
      bookshelfNotes: []
    }]

  await User.insertMany(users)
  console.log('created users')
}

const run = async () => {
  await main()
  db.close()
}

run()
