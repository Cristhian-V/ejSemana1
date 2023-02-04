const {Router} = require('express');
const { findAllUsers, findUser, createUser, updateUser, deleteUser} = require('../controllers/users.constrollers');
const { validateUpdate } =  require('../middleware/user.middleware')

const router = Router();

router.get('/', findAllUsers)

router.get('/:id', findUser)

router.post('/', createUser)

router.patch('/:id', validateUpdate, updateUser)

router.delete('/:id', deleteUser)

module.exports = {
  userRoutes : router
}