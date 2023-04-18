
const router = require('express').Router();
const apiRoutes = require('c:/Users/annac/Documents/bootcamp/GitProjects/social-network-API/social-network-API/api');

router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).send('<h1>404 Error</h1>');
});

module.exports = router;