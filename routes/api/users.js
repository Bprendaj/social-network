const router = require("express").Router();

router.route("/").get(getUsers).post(createUser);

router.route("/:id")
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);


router.route("/:userId/friends/:friendId")
  .post(addFriend)
  .delete(deleteFriend);

//model export router
module.exports = router;