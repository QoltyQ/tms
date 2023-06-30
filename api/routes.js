const express = require("express");
const UserController = require("./controllers/UserController");
const TaskController = require("./controllers/TaskController");
const TagController = require("./controllers/TagController");
const authenticationMiddleware = require("./middlewares/authenticationMiddleware");
const validationMiddleware = require("./middlewares/validationMiddleware");

const router = express.Router();
const userController = new UserController();
const taskController = new TaskController();
const tagController = new TagController();

// User Routes
router.post("/users", validationMiddleware, userController.register);
router.post("/login", validationMiddleware, userController.login);
router.get("/users/:id", authenticationMiddleware, userController.getUserById);
router.put("/users/:id", authenticationMiddleware, userController.updateUser);
router.delete(
  "/users/:id",
  authenticationMiddleware,
  userController.deleteUser
);

// Task Routes
router.get("/tasks", authenticationMiddleware, taskController.getAllTasks);
router.get("/tasks/:id", authenticationMiddleware, taskController.getTaskById);
router.post(
  "/tasks",
  authenticationMiddleware,
  validationMiddleware,
  taskController.createTask
);
router.put(
  "/tasks/:id",
  authenticationMiddleware,
  validationMiddleware,
  taskController.updateTask
);
router.delete(
  "/tasks/:id",
  authenticationMiddleware,
  taskController.deleteTask
);

// Tag Routes
router.get("/tags", authenticationMiddleware, tagController.getAllTags);
router.get("/tags/:id", authenticationMiddleware, tagController.getTagById);
router.post(
  "/tags",
  authenticationMiddleware,
  validationMiddleware,
  tagController.createTag
);
router.put(
  "/tags/:id",
  authenticationMiddleware,
  validationMiddleware,
  tagController.updateTag
);
router.delete("/tags/:id", authenticationMiddleware, tagController.deleteTag);

module.exports = router;
