const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/:user_id/courses', userController.addCourseToUser);

router.get('/:user_id/courses/progress', userController.getUserCourseProgress);

router.put('/:user_id/courses/:course_id/progress', userController.updateUserCourseProgress);

module.exports = router;
