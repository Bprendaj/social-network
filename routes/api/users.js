const router = require("express").Router();

//set requirements
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/users");

// /api/users <GET, POST>
router.route("/").get(getUsers).post(createUser);

// /api/users/ <GET, PUT, DELETE>
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// </api/users/:userId/friends/ <POST , DELETE>
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

//model export router
module.exports = router;