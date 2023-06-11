const express = require('express');
const router = express.Router();
const designsCtrl = require('../controllers/design-controller');

router.route('/')
    .get(designsCtrl.allPosts);

router.route('/create')
    .post(designsCtrl.createPost);
//not sure about allDesigns

router.route("/:_id")
    .get(designsCtrl.postDetails)
    .put(designsCtrl.updatePost)
    .delete(designsCtrl.deletePost)


module.exports = router;