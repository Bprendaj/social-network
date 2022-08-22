const router = require("express").Router();

// Set requirements
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,

} = require("../../controllers/thoughts");

// /api/thoughts <GET>
router.route("/").get(getThoughts);

// /api/thoughts/:userId <POST>
router.route("/:userId").post(createThought);

// Directs to: /api/thoughts/:id <GET, PUT, DELETE>
router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions <POST>
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions <DELETE>
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

//export model router
module.exports = router;