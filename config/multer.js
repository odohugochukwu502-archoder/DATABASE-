const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
// npm install multer and cloudinary
// muter is a middleware for handling multipart/form-data, which is primarily used for uploading files. In this code snippet, we are configuring multer to store uploaded files in the 'uploads/' directory and to name the files with a timestamp followed by the original filename. The `upload` variable is then exported for use in other parts of the application, such as in route handlers where file uploads are needed.
// cloudinary is a cloud-based service that provides an end-to-end image and video management solution, including uploads, storage, manipulations, optimizations, and delivery. It can be integrated with multer to handle file uploads directly to the cloud instead of storing them locally.