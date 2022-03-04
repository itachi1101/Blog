const { Router } = require("express");
const multer = require("multer");
const postController = require("../controllers/postController");
const router = Router();
const upload = multer({
  limits: {
    fileSize: 2000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }
    cb(undefined, true);
  },
});
router.post(
  "/api/post/create/",
  upload.single("pic"),
  postController.create,
  (error, req, res, next) => {
    res.status(400).json({ error: error.message });
  }
);
router.get("/api/post/myposts/", postController.searchUserPosts);
module.exports = router;
