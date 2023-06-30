class TaskService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  createTask = async (taskData) => {
    return this.taskRepository.createTask(taskData);
  };

  getTaskById = async (taskId) => {
    return this.taskRepository.getTaskById(taskId);
  };

  updateTask = async (taskId, updatedTaskData) => {
    return this.taskRepository.updateTask(taskId, updatedTaskData);
  };

  deleteTask = async (taskId) => {
    return this.taskRepository.deleteTask(taskId);
  };

  getAllTasks = async () => {
    return this.taskRepository.getAllTasks();
  };
}

module.exports = TaskService;
