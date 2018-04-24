const express = require('express');
const router = express.Router();

const { checkAuthentication } = require('./../middlewares/AuthMiddlewares');

const postController = require('./../controllers/PostController');

router.post('/', checkAuthentication, postController.createPost);
router.get('/:id', postController.readPost);
router.put('/:id', checkAuthentication, postController.updatePost);
router.delete('/:id', checkAuthentication, postController.deletePost);
router.post('/:id/vote', checkAuthentication, postController.vote);
router.post('/:id/comment', checkAuthentication, postController.createComment);
router.put('/:id/comment/:comment_id', checkAuthentication, postController.updateComment);
router.delete('/:id/comment/:comment_id', checkAuthentication, postController.deleteComment);

module.exports = router;
