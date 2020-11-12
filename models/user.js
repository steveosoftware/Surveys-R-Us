const mongoose = require('mongoose');
const { Schema } = mongoose; // const Schema = mongoose.Schema  just destructered

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});


mongoose.model('users', userSchema);