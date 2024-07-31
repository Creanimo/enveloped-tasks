import { Task } from "../model/task/task.js";
import { Category } from "../model/lists/category.js";

function mapDataToTask(data, taskModel = Task) {
    const { id, title, description, completed, pinned, category, tags, dueDate } = data;
    return new taskModel(id, title, description, completed, pinned, category, tags, dueDate);
}

function mapDataToCategory(data, CategoryModel = Category) {
    const { tasks, name } = data;
    const taskInstances = tasks.map(taskData => mapDataToTask(taskData));
    return new CategoryModel(taskInstances, name);
}

export { mapDataToTask, mapDataToCategory };