const multer = require('multer');
const cloudinary = require('cloudinary').v2
// Saved in CLoudinary store
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Talents',
        allowedFormats: ['jpg', 'png', 'jpeg', 'gif']
    }
})


const upload = multer({ storage });

module.exports = upload;