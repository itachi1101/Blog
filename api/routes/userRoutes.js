const { Router } = require("express");
const userController = require("../controllers/userController");
const router = Router();

router.put("/api/user/updatelikedposts/", userController.addLikedPosts);
router.post("/api/user/deleteunlikedposts/", userController.deleteLikedPosts);
router.post("/api/user/getlikedposts/", userController.getLikedPosts);
module.exports = router;
