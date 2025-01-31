const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  profileImg: String,
  coverImg: String,
  iban: { type: String, unique: true },
  isBlocked: { type: Boolean, default: false },
  isEmailVerified: { type: Boolean, default: false },
  isPhoneVerified: { type: Boolean, default: false },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
