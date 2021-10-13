const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

var Users = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    default: "Anonymous",
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age is not valid");
      }
    },
  },
  email: {
    type: String,
    required: true,
    trin: true,
    lowercase: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not valid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      // if (value.length <= 6) {
      //   throw new Error("Password length should be greater than 6");
      // }
      if (value.includes("password") || value.includes("Password")) {
        throw new Error("You can not use this password phrase");
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

Users.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "owner",
});

Users.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

Users.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ id: user.id.toString() }, "Thisismynewcourse");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

Users.statics.findByCredentials = async (email, password) => {
  const user = await Users.findOne({ email });
  if (!user) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return user;
};

// Hash the plain text password before saving
Users.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

Users = mongoose.model("Users", Users);

module.exports = Users;
