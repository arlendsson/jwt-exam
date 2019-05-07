const router = require('express').Router()
const controller = require('./board.controller')

router.get('/', controller.find)
router.get('/:boardSeq', controller.findOne)
router.post('/', controller.create)
router.put('/:boardSeq', controller.update)
router.delete('/:boardSeq', controller.delete)

module.exports = router
