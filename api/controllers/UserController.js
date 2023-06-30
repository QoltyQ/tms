const { generateToken } = require("../auth");
const UserService = require("../../domain/services/UserService");

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  register = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await this.userService.register(username, password);

      const token = generateToken({ userId: user.id });

      return res.json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await this.userService.login(username, password);

      if (!user) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      const token = generateToken({ userId: user.id });

      return res.json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  createUser = async (req, res) => {
    try {
      const { username, password } = req.body;
      const userData = { username, username, password };

      const createdUser = await this.userService.createUser(userData);

      return res.status(201).json(createdUser);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  getUserById = async (req, res) => {
    try {
      const { id } = req.params;

      const user = await this.userService.getUserById(id);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { username, password } = req.body;
      const userData = { username, username, password };

      const updatedUser = await this.userService.updateUser(id, userData);

      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;

      const deletedUser = await this.userService.deleteUser(id);

      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };
}

module.exports = UserController;
