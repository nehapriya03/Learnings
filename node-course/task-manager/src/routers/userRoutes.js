const express = require("express");
const router = new express.Router();
const User = require("../models/users");
const auth = require("../middleware/auth");

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
  // try {
  //   const user = await User.find();
  //   console.log("It is coming here");
  //   res.send(user);
  // } catch (e) {
  //   res.status(500).send(e);
  // }
  // User.find({})
  //   .then((response) => {
  //     console.log(response);
  //     res.send(response);
  //   })
  //   .catch((error) => {
  //     res.status(500).send();
  //   });
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send(e);
    console.log(e);
  }
});

router.post("/users/logoutall", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (e) {
    res.status(404).send(e);
  }
});

//   User.findById(id)
//     .then((response) => {
//       if (!response) {
//         return res.status(404).send();
//       }
//       res.send(response);
//     })
//     .catch((error) => {
//       res.status(404).send();
//     });
// });

router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// user
//   .save()
//   .then(() => {
//     res.status(200).send(req.body);
//   })
//   .catch((error) => {
//     res.status(400).send(error);
// res.send(error);
//     });
//   console.log(req.body);
//   // res.send(req.body);
// });

router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "age", "email", "password"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  // const id = req.params.id;
  try {
    // const userToUpdate = await User.findById(req.user);

    updates.forEach((update) => {
      req.user[update] = req.body[update];
    });
    await req.user.save();
    // if (!userToUpdate) {
    //   return res.status(404).send();
    // }
    res.status(200).send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/users/me", auth, async (req, res) => {
  try {
    await req.user.remove();
    // const user = await User.findByIdAndDelete(req.user._id);
    // if (!user) {
    //   return res.status(404).send();
    // }
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

// router.delete("/users/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const usertoDelete = await User.findByIdAndDelete(id);
//     if (!usertoDelete) {
//       return res.status(404).send({ message: "no user to delete" });
//     }
//     res.status(200).send({ message: "Deleted" });
//   } catch {
//     res.status(500).send();
//   }
// });

module.exports = router;
