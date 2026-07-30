const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const { protect } = require("../middleware/authMiddleware");
const { uploadImage } = require("../controllers/uploadController");

router.post(
  "/",
  protect,
  upload.single("image"),
  uploadImage
);

module.exports = router;