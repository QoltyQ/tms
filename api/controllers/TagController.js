const TagService = require("../../domain/services/TagService");

class TagController {
  constructor() {
    this.tagService = new TagService();
  }

  async createTag(req, res) {
    try {
      const { name } = req.body;
      const tagData = { name };

      const createdTag = await this.tagService.createTag(tagData);

      return res.status(201).json(createdTag);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async getAllTags(req, res) {
    try {
      const tags = await this.tagService.getAllTags();

      return res.status(200).json(tags);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async getTagById(req, res) {
    try {
      const { id } = req.params;

      const tag = await this.tagService.getTagById(id);

      if (!tag) {
        return res.status(404).json({ error: "Tag not found" });
      }

      return res.status(200).json(tag);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateTag(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const tagData = { name };

      const updatedTag = await this.tagService.updateTag(id, tagData);

      if (!updatedTag) {
        return res.status(404).json({ error: "Tag not found" });
      }

      return res.status(200).json(updatedTag);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteTag(req, res) {
    try {
      const { id } = req.params;

      const deletedTag = await this.tagService.deleteTag(id);

      if (!deletedTag) {
        return res.status(404).json({ error: "Tag not found" });
      }

      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = TagController;
