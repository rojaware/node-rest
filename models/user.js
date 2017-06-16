// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
    fullName: String,
    userId: String, 
    role: String
});

// Return model
module.exports = restful.model('Users', userSchema);