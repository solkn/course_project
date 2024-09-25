const express = require('express');
const lessonController = require('../controllers/lessonController');

const router = express.Router();

router.post('/course/:id/lessons', lessonController.addLesson);

router.get('/course/:id/lessons', lessonController.getLessonsByCourse);

router.put('/lessons/:id', lessonController.updateLesson);

router.delete('/lessons/:id', lessonController.deleteLesson);

router.put('/lessons/:id/change-course', lessonController.changeCourse);

module.exports = router;
