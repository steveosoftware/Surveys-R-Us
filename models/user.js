const mongoose = require('mongoose');
const { Schema } = mongoose; // const Schema = mongoose.Schema  just destructered

const userSchema = new Schema({
  googleId: String
});


mongoose.model('users', userSchema);