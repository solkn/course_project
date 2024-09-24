const express = require('express');
const progressController = require('../controllers/progressController');

const router = express.Router();

router.post('/lessons/:id/progress', progressController.trackProgress);

router.get('/user/:id/progress', progressController.getProgressByUser);

router.get('/lessons/:lesson_id/progress/:user_id', progressController.getProgressByLessonAndUser);

module.exports = router;
