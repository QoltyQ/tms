const { PrismaClient } = require("@prisma/client");

class TaskRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  createTask = async (taskData) => {
    return this.prisma.task.create({
      data: taskData,
    });
  };

  getAllTasks = async () => {
    return this.prisma.task.findMany();
  };

  getTaskById = async (taskId) => {
    return this.prisma.task.findUnique({
      where: { id: taskId },
    });
  };

  updateTask = async (taskId, updatedTaskData) => {
    return this.prisma.task.update({
      where: { id: taskId },
      data: updatedTaskData,
    });
  };

  deleteTask = async (taskId) => {
    return this.prisma.task.delete({
      where: { id: taskId },
    });
  };
}

module.exports = TaskRepository;
