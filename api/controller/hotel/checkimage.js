const multer = require("multer");
const config = require("config");
const storage = multer.diskStorage({
  destination: function (request, file, cb) {
    cb(null, config.imagePath);
  },
  filename: function ( file, cb) {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter: fileFilter,
});
module.exports = upload;
