const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin-controller');

router.route('/')
    .get(adminCtrl.adminConsole);


router.route("/create")
    .get(adminCtrl.createPost)



router.route("/update/:_id")
    .get(adminCtrl.updatePost)


module.exports = router;