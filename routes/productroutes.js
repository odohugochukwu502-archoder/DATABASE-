const express = require('express');
const { uploadProduct, getAllProducts } = require('../controller/productcontroller');
const upload = require('../config/multer');

const Router = express.Router();
Router.post('/upload/:userId', upload.single('image'), uploadProduct);
Router.get('/getall', getAllProducts);

module.exports = Router;
