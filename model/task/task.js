class Task {
    /**
     * 
     * @param {string} id 
     * @param {string} title 
     * @param {string} description 
     * @param {boolean} completed 
     * @param {boolean} pinned 
     * @param {Category|null} category 
     * @param {Array<Tag>|null} tags 
     * @param {Date|null} dueDate 
     */
    constructor(id, title, description, completed, pinned, category, tags, dueDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed
        this.pinned = pinned;
        this.category = category;
        this.tags = tags;
        this.dueDate = dueDate;
        this.completed = completed;
    }

    markAsCompleted() {
        this.completed = true;
    }
}

export { Task };