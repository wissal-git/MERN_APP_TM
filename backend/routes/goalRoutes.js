const express = require('express')
const router = express.Router()
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalController')


router.get('/',getGoals)
router.post('/',setGoals)
router.put('/:id',updateGoals)
router.delete('/:id',deleteGoals)
/**
 * * something cool to use instead use route
 * todo router.route('/').get(getGoals).post(setGoal)
*  todo router.route('/:id').delete(deleteGoals).put(updateGoal)

*/

module.exports =router