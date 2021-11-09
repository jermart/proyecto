// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const Schema = mongoose.Schema;
// const saltRaounds = 10;
import bcrypt from "bcrypt";
const saltRaounds = 10;

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  role: { type: String, default: "regular" },
  img: { type: String },
});

UserSchema.pre("save", function (next) {
  if (this.isNew || this.ismodified("password")) {
    const document = this;
    bcrypt.hash(document.password, saltRaounds, (err, hashedPassword) => {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

UserSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};

//convertir modelo
const User = mongoose.model("User", UserSchema);

export default User;