const express = require('express');
const router = express.Router();

const { checkAuthentication } = require('./../middlewares/AuthMiddlewares');

const commentController = require('./../controllers/CommentController');

//router.get('/post/:post_id', checkAuthentication, commentController.readComment);
router.post('/post/:post_id', checkAuthentication, commentController.createComment);
router.put('/:comment_id/post/:post_id', checkAuthentication, commentController.updateComment);
router.delete('/:comment_id/post/:post_id', checkAuthentication, commentController.deleteComment);

module.exports = router;
