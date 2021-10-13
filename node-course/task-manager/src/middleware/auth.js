const jwt = require("jsonwebtoken");
const User = require("../models/users");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "Thisismynewcourse");
    const user = await User.findOne({ _id: decoded.id });
    // console.log(user);

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: "Please authenticate" });
  }
};

module.exports = auth;
