const multer  = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, 'public/images');
    },
    filename: function (req, file, callBack) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      callBack(null, uniqueSuffix + '-' + file.originalname );
    }
  });
  
const upload = multer({
    storage : storage,
    fileFilter: function (req, file, callback) {
        let fileSplit = file.originalname.split('.');
        let ext = `.${fileSplit[1]}`;
        console.log("this is ext" + ext);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'));
        }
        callback(null, true);
    },
});

const UploadController = {
    uploadImage : [
        upload.single( 'myImage' ), 
        function( request, response ){
            response.status( 200 ).json( { message: "Image uploaded successfully" } );
        }
    ]
}

module.exports = {
    UploadController
};