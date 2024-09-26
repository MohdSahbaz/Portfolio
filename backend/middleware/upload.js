const multer = require("multer");
const path = require("path");

// set storage engine
const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "../../frontend/public/"),
  filename: (req, file, cb) => {
    const uniqueName = `${file.originalname}-${Date.now()}${path.extname(
      file.originalname
    )}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    // allowed ext
    const filetypes = /jpeg|jpg|png|pdf/;

    // chect text
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    // check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      return cb(new Error("Upload Images and PDFs only!"));
    }
  },
}).single("icon");

module.exports = upload;
