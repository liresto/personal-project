const express = require('express');
const router = express.Router();
const designsCtrl = require('../controllers/design-controller');

router.route('/')
    .get(designsCtrl.allPosts);
//not sure about allDesigns

router.route("/:_id")
    .get(designsCtrl.postDetails)
    // .put(designsCtrl.updateDesign)
    // .delete(bookCtrl.deleteDesign)


module.exports = router;