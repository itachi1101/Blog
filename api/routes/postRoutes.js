const { Router } = require("express");
const postController = require("../controllers/postController");
const router = Router();

router.post("/api/post/create/", postController.create);
router.get("/api/post/myposts/", postController.searchUserPosts);
module.exports = router;
