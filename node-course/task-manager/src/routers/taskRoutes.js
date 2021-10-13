const express = require("express");
const router = new express.Router();
const auth = require("../middleware/auth");
const Task = require("../models/task");

router.post("/task", auth, async (req, res) => {
  // const tasks = new Task(req.body);
  const task = new Task({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await task.save();
    res.status(200).send(task);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }

  // task
  //   .save()
  //   .then(() => {
  //     res.status(200).send(req.body);
  //   })
  //   .catch((error) => {
  //     res.status(400).send(error);
  //   });
  // console.log(req.body);
});

router.get("/task", async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
  // Task.find({})
  //   .then((response) => {
  //     res.status(200).send(response);
  //   })
  //   .catch((error) => {
  //     res.send(500).send(error);
  //   });
});

router.get("/task/:id", auth, async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findOne({ id, owner: req.user._id });

    if (!task) {
      console.log("There is no task");
      return res.status(404).send();
    }
    res.status(200).send(task);
  } catch (e) {
    console.log(e);
    res.status(404).send(e);
  }
});

router.patch("/task/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidUpdate = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidUpdate) {
    console.log("It is coming here");
    return res.status(400).send({ error: "Invalid update" });
  }
  const id = req.params.id;
  try {
    const taskToUpdate = await Task.findById(id);
    updates.forEach((update) => {
      taskToUpdate[update] = req.body[update];
    });
    await taskToUpdate.save();
    console.log("Task is done");
    if (!taskToUpdate) {
      return res.status(400).send();
    }
    res.status(200).send(taskToUpdate);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/task/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const taskToDelete = await Task.findByIdAndDelete(id);
    if (!taskToDelete) {
      return res.status(404).send({ message: "No Task to delete" });
    }
    res.status(200).send(taskToDelete);
  } catch (error) {
    res.status(500).send();
  }
});
// Task.findById(id)
//   .then((response) => {
//     if (!response) {
//       console.log("There is no response");
//       return res.status(404).send();
//     }
//     res.status(200).send(response);
//   })
//   .catch((error) => {
//     res.status(500).send(error);
//   });
// });

module.exports = router;
