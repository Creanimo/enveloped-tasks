import { Task } from "../model/task/task.js";
import { Category } from "../model/lists/category.js";

function mapDataToTask(data, taskModel = Task) {
    const { id, title, description, completed, pinned, category, tags, dueDate } = data;
    return new taskModel(id, title, description, completed, pinned, category, tags, dueDate);
}

function mapDataToCategory(data, CategoryModel = Category, TaskModel = Task) {
    const { tasks, name } = data;
    for (const taskId of tasks) {
        
    }
    const taskInstances = tasks.map(taskData => mapDataToTask(taskData));
    return new CategoryModel(taskInstances, name);
}

export { mapDataToTask, mapDataToCategory };