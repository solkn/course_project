const express = require('express');
const lessonContentController = require('../controllers/lessonContentController');

const router = express.Router();

router.get('/lessons/:id/content', lessonContentController.getContentByLesson);

router.post('/lessons/:id/content', lessonContentController.addContentToLesson);

router.put('/content/:id', lessonContentController.updateContent);

router.delete('/content/:id', lessonContentController.deleteContent);

module.exports = router;
