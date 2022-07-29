const db = require('../db')
const { User, Book } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const users = [
    {
      userName: 'kristina',
      password: 'password1',
      email: 'kristinaEmail@email.com',
      bookshelf: [
        { favBooks: [] }, // array goes here
        { wantBooks: [] } // array goes here
      ]
    }]

  await User.insertMany(users)
  console.log('created users')
}

const run = async () => {
  await main()
  db.close()
}

run()
