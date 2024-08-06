import { List } from "./list.js";
import { DataManager } from "../datamanager.js";

class Category extends List {
    /**
     * 
     * @param {Array<string>} taskIds 
     * @param {string} name 
     */
    constructor(taskIds = [], name) {
        super(taskIds);
        this.name = name;
    }

    /**
     * Fetch tasks based on IDs.
     * @param {Function} fetchTaskById - Function to fetch task by ID.
     * @returns {Promise<Array<Task>>}
     */
    async getTasks(fetchTaskById = DataManager.fetchTaskById) {
        let tasks = [];
        for (const task in this.taskIds) {
            const taskData = await fetchTaskById(task.id)
            taskObject = mapDataToTask(taskData)
            tasks.push(taskObject);
        }
        return tasks;
    }
}

export { Category };
