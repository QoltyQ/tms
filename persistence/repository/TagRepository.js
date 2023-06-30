const { PrismaClient } = require("@prisma/client");

class TagRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  createTag = async (tagData) => {
    return this.prisma.tag.create({
      data: tagData,
    });
  };

  getAllTags = async () => {
    return this.prisma.tag.findMany();
  };

  getTagById = async (tagId) => {
    return this.prisma.tag.findUnique({
      where: { id: tagId },
    });
  };

  updateTag = async (tagId, updatedTagData) => {
    return this.prisma.tag.update({
      where: { id: tagId },
      data: updatedTagData,
    });
  };

  deleteTag = async (tagId) => {
    return this.prisma.tag.delete({
      where: { id: tagId },
    });
  };
}

module.exports = TagRepository;
