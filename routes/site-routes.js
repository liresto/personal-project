const express = require('express');
const router = express.Router();
const siteCtrl = require('../controllers/site-controller');

router.route('/')
    .get(siteCtrl.index);


router.route("/about")
    .get(siteCtrl.about)


router.route("/login")
    .get(siteCtrl.login)
    .post(siteCtrl.login_post)

router.route('/logout')
    .get(siteCtrl.logout)

//Register Route

router.route("/register")
    .get(siteCtrl.register)
    .post(siteCtrl.register_post)

//Google OAuth

router.route('/auth/google')
    .get(siteCtrl.google_get)

router.route('/auth/google/posts')
    .get(siteCtrl.google_redirect_get)

module.exports = router;