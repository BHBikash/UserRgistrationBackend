const express = require('express');
const { registerUser, loginUser, getAllUsers, getSingleUser, updateUser, deleteUser } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', protect, getAllUsers);
router.get('/user/:id', protect, getSingleUser);
router.put('/user/:id', protect, updateUser);
router.delete('/user/:id', protect, deleteUser);

module.exports = router;
