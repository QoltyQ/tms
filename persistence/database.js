const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  prisma,
  connect: async () => {
    try {
      await prisma.$connect();
      console.log("Connected to the database");
    } catch (error) {
      console.error("Database connection error:", error);
      process.exit(1);
    }
  },
  disconnect: async () => {
    await prisma.$disconnect();
    console.log("Disconnected from the database");
  },
};
