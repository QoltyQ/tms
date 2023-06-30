const bcrypt = require("bcrypt");
const UserRepository = require("../../persistence/repository/UserRepository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  register = async (username, password) => {
    const existingUser = await this.userRepository.getUserByUsername(username);
    if (existingUser) {
      throw new Error("Email is already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userRepository.createUser({
      username,
      password: hashedPassword,
    });

    return user;
  };

  login = async (username, password) => {
    const user = await this.userRepository.getUserByUsername(username);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Invalid email or password");
    }

    return user;
  };

  createUser = async (userData) => {
    return this.userRepository.createUser(userData);
  };

  getAllUsers = async () => {
    return this.userRepository.getAllUsers();
  };

  getUserById = async (userId) => {
    return this.userRepository.getUserById(userId);
  };

  getUserByEmail = async (email) => {
    return this.userRepository.getUserByEmail(email);
  };

  updateUser = async (userId, updatedUserData) => {
    return this.userRepository.updateUser(userId, updatedUserData);
  };

  deleteUser = async (userId) => {
    return this.userRepository.deleteUser(userId);
  };
}

module.exports = UserService;
