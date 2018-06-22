const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user.controller');

router.post('/create',user_controller.createUser);
router.get('/:phoneNum',user_controller.getUser);
router.delete('/:id/delete',user_controller.deleteUser);
router.put('/:id/update',user_controller.updateUser);

module.exports = router;

