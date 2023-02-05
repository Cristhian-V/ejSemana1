const {Router} = require('express');
const { findAllUsers, findUser, createUser, updateUser, deleteUser} = require('../controllers/users.constrollers');
const { validateUpdate, validateId } =  require('../middleware/user.middleware')

const router = Router();

router.get('/', findAllUsers)

router.get('/:id', validateId, findUser)

router.post('/', createUser)

router.patch('/:id', validateId, validateUpdate, updateUser)

router.delete('/:id', validateId, deleteUser)

module.exports = {
  userRoutes : router
}