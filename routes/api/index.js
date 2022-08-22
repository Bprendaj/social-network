const router = require("express").Router();

// Set routes (user and thought routes)
const userRoutes = require("./users");
const thoughtRoutes = require("./thoughts");

// Add `/users` and '/thoughts' to created routes 
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

// Export Module Router
module.exports = router;