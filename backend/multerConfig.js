const multer = require('multer');
const path = require('path');
const fs = require('fs')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const albumFolder = `public/${req.body.albumTitle.replace(/\s+/g, "_")}`;

    if (!fs.existsSync(albumFolder)) {
      fs.mkdirSync(albumFolder, { recursive: true });
    }

    cb(null, albumFolder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const multerUpload = multer ({storage:storage});

module.exports = multerUpload;
