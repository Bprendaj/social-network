// Require express router
const router = require('express').Router();

// Import all of the API routes 
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// 404 Status error message
router.use((req, res) => {
    res.status(404).json({error:'not found'});
  });

// Module exports router
module.exports = router;