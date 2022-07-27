const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => {
  response.send({ msg: 'server running' })
})// homepage = '/home'

router.post('/bookshelf', controllers.addFavBook, controllers.addWantBook) // this probably has to be two different routes?

router.get('/bookshelf', controllers.getBookshelf)

router.get('/bookshelf/favBooks', controllers.getFavBooks)

router.get('/bookshelf/wantBooks', controllers.getWantBooks)

router.get('/books', controllers.getAllBooks)

router.get('/books/poetry', controllers.getPoetryBooks)

router.get('/books/fiction', controllers.getFictionBooks)

router.get('/books/:id', controllers.getBookById)


module.exports = router;
