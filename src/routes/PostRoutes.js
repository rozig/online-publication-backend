const express = require('express');
const router = express.Router();

const { checkAuthentication } = require('./../middlewares/AuthMiddlewares');

const postController = require('./../controllers/PostController');

router.post('/', checkAuthentication, postController.createPost);
router.get('/by-user', checkAuthentication, postController.getPostsByUser);
router.get('/', postController.getPosts);
router.get('/:id', postController.readPost);
router.put('/:id', checkAuthentication, postController.updatePost);
router.delete('/:id', checkAuthentication, postController.deletePost);
router.post('/:id/vote', checkAuthentication, postController.vote);

module.exports = router;
