
const express = require('express')
const router = express.Router();
const adminRoutes = require('./admin-routes');
const siteRoutes = require('./site-routes');
const designRoutes = require('./design-routes');


router.use('/', siteRoutes);
router.use('/designs', designRoutes);
router.use('/admin', adminRoutes);


module.exports = router;