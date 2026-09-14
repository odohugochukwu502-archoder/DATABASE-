const cloudinary = require('cloudinary').v2;

//import {v2 as cloudinary} from 'cloudinary'; if we are using cjs

cloudinary.config({
  cloud_name: "mwu9rkjl",
  api_key: "466856259571914",
  api_secret: "U6WCf2kEwc3l9sUBpJpS_MKE1eU"
});

module.exports = cloudinary;