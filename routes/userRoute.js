const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/users/:user_id/courses', userController.addCourseToUser);

router.get('/users/:user_id/courses/progress', userController.getUserCourseProgress);

router.put('/users/:user_id/courses/:course_id/progress', userController.updateUserCourseProgress);

module.exports = router;
