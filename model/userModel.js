const mongoose = require('mongoose'); // cjs importation
// model are used to define a data/collections ,schema set up individual data,


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

const usermodel = module.exports = mongoose.model('User', userSchema)

module.exports = usermodel//cjs exportation
// when starting starting data in moogoose we have to start with a capital letter, data type must start with a capital letter