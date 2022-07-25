const db = require('../db')
const { User, Book } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const users = [
    {
      userName: '',
      password: '',
      bookshelf: [
        {
          favBooks: [book[0]._id, book[1]._id, book[2]._id] // array goes here
        },
        {
          wantBooks: [book[3]._id, book[4]._id] // array goes here
        }
      ]
  ]

  await User.insertMany(users)
  console.log('created users')
}

const run = async () => {
  await main()
  db.close()
}

run()
