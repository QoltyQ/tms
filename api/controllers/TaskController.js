const TaskService = require("../../domain/services/TaskService");

class TaskController {
  constructor() {
    this.taskService = new TaskService();
  }

  async createTask(req, res) {
    try {
      const { title, description, status } = req.body;
      const taskData = { title, description, status };

      const createdTask = await this.taskService.createTask(taskData);

      return res.status(201).json(createdTask);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async getAllTasks(req, res) {
    try {
      const tasks = await this.taskService.getAllTasks();

      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async getTaskById(req, res) {
    try {
      const { id } = req.params;

      const task = await this.taskService.getTaskById(id);

      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }

      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateTask(req, res) {
    try {
      const { id } = req.params;
      const { title, description, status } = req.body;
      const taskData = { title, description, status };

      const updatedTask = await this.taskService.updateTask(id, taskData);

      if (!updatedTask) {
        return res.status(404).json({ error: "Task not found" });
      }

      return res.status(200).json(updatedTask);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteTask(req, res) {
    try {
      const { id } = req.params;

      const deletedTask = await this.taskService.deleteTask(id);

      if (!deletedTask) {
        return res.status(404).json({ error: "Task not found" });
      }

      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = TaskController;
