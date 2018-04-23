const express = require('express');
const router = express.Router();

const postController = require('./../controllers/PostController');

router.post('/', postController.createPost);
router.get('/:id', postController.readPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

// #start eta's code
router.post('/:id/comment',postController.createComment);
//router.put('/:id/:commentid',postController.updateComment);
//router.delete(':id/:commentid',postController.deleteComment);
// #end eta's code

module.exports = router;
