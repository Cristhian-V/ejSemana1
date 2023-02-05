const {Router} = require('express')
const { findRepairPending, findRepairPendingById, submitRepair,updateStatus, updateStatusDelete } = require('../controllers/repair.controller')
const { validateIdRepairs } = require('../middleware/repair.middleware')


const router = Router()

router.get('/', findRepairPending)

router.get('/:id',validateIdRepairs, findRepairPendingById)

router.post('/', submitRepair)

router.patch('/:id', validateIdRepairs, updateStatus)

router.delete('/:id', validateIdRepairs, updateStatusDelete)

module.exports = {
  repairsRoutes: router
}