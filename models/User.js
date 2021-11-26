
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
Underscoreid:String , 

username:String , 

useremail:String 


})

module.exports = {
  User : mongoose.model('User', userSchema),
}

