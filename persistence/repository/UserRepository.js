const { PrismaClient } = require("@prisma/client");

class UserRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  createUser = async (userData) => {
    return this.prisma.User.create({
      data: userData,
    });
  };

  getUserById = async (userId) => {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  };

  getUserByUsername = async (username) => {
    return this.prisma.User.findUnique({
      where: { username },
    });
  };

  updateUser = async (userId, updatedUserData) => {
    return this.prisma.user.update({
      where: { id: userId },
      data: updatedUserData,
    });
  };

  deleteUser = async (userId) => {
    return this.prisma.user.delete({
      where: { id: userId },
    });
  };
}

module.exports = UserRepository;
