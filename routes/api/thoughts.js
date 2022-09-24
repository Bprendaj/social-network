const router = require("express").Router();

router.route("/")
    .get(getThoughts);

router.route("/:userId")
    .post(createThought);

router.route("/:id")
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router.route("/:thoughtId/reactions")
    .post(addReaction);


router.route("/:thoughtId/reactions/:reactionId")
    .delete(deleteReaction);

//export model router
module.exports = router;