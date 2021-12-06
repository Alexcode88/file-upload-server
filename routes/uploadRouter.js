const express = require( 'express' );
const UploadRouter = express.Router();
const { UploadController } = require( './../controllers/uploadController' );

UploadRouter
    .post( '/', UploadController.uploadImage );

module.exports = { UploadRouter };