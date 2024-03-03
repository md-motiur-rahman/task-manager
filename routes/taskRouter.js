const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router
  .route("/")
  .get(taskController.getAllTasks)
  .post(taskController.createTask);
router.route("/:id").patch(taskController.startTask);
router.patch("/complete/:id", taskController.completeTask);

module.exports = router;
