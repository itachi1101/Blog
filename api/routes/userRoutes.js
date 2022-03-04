const { Router } = require("express");
const userController = require("../controllers/userController");
const router = Router();

router.put("/api/user/updatelikedposts/", userController.updateLikedPosts);
module.exports = router;
