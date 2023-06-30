class TagService {
  constructor(tagRepository) {
    this.tagRepository = tagRepository;
  }

  createTag = async (tagData) => {
    return this.tagRepository.createTag(tagData);
  };

  getTagById = async (tagId) => {
    return this.tagRepository.getTagById(tagId);
  };

  updateTag = async (tagId, updatedTagData) => {
    return this.tagRepository.updateTag(tagId, updatedTagData);
  };

  deleteTag = async (tagId) => {
    return this.tagRepository.deleteTag(tagId);
  };

  getAllTags = async () => {
    return this.tagRepository.getAllTags();
  };
}

module.exports = TagService;
