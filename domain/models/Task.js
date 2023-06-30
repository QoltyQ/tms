class Task {
  constructor(id, title, description, status, createdAt) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
    this.tags = [];
  }

  addTag(tag) {
    this.tags.push(tag);
  }

  removeTag(tagId) {
    this.tags = this.tags.filter((tag) => tag.id !== tagId);
  }
}

module.exports = Task;
