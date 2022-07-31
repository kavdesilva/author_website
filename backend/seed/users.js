const db = require('../db')
const { User, Book } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const users = [
    {
      username: 'kristina',
      password: 'password1',
      email: 'kristinaEmail@email.com',
      bookshelf: [
        { favBooks: [] }, 
        { wantBooks: []} 
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
