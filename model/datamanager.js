import { TaskController } from "../controller/task-controller.js";

const appData = {
    "tasks": {
        "1": {
            "id": "1",
            "title": "Task 1",
            "description": "Description for Task 1",
            "completed": false,
            "pinned": false,
            "dueDate": "2024-08-10T00:00:00Z"
        },
        "2": {
            "id": "2",
            "title": "Task 2",
            "description": "Description for Task 2",
            "completed": false,
            "pinned": true,
            "dueDate": "2024-08-15T00:00:00Z"
        },
        "3": {
            "id": "3",
            "title": "Task 3",
            "description": "Description for Task 2",
            "completed": false,
            "pinned": true,
            "dueDate": "2024-08-15T00:00:00Z"
        }
    },
    "categories": {
        "1": {
            "name": "Work",
            "taskIds": ["1"],
        },
        "2": {
            "name": "Household",
            "taskIds": ["2","3"],
        }
    },
    "tags": {
        "1": {
            "name": "meeting",
            "taskIds": ["2"],
        }
    }
};

class DataManager {
    /**
     * @group Tasks
     * @param {string} id 
     * @returns {Object} task data
     */
    static async fetchTaskById(id) {
        const data = await appData.tasks[id]
        return data;
    }

    /**
     * @group Tasks
     * @param {string} categoryId 
     * @returns {Object} tasks in category
     */
    static async fetchTasksInCategory(categoryId) {
        const categoryData = await this.fetchCategoryById(categoryId);
        let tasks = [];
        const extractIds = Object.values(categoryData["taskIds"]);
        
        for (const taskId of extractIds) {
            const taskController = new TaskController();
            const taskData = await taskController.getTaskById(taskId);
            tasks.push(taskData);
        }
        
        return tasks;
    }

    /**
     * @group Categories
     * @param {string} id 
     * @returns 
     */
    static async fetchCategoryById(id) {
        const data = await appData.categories[id];
        return data;
    }

    /**
     * @group Categories
     * @returns {Array}
     */
    static fetchCategoryNames = async () => {
        let categoryNames = [];
        const iterateCategories= async () => {
            for (const task of Object.values(appData.categories)) {
                categoryNames.push(task.name);
            }
            return categoryNames;
        }
        const allNames = await iterateCategories();
        return allNames;
    }

    /**
     * @group Tags
     * @returns {Array}
     */
    static fetchTagNames = async () => {
        let tagNames = [];
        const iterateTags = async () => {
            for (const task of Object.values(appData.tags)) {
                tagNames.push(task.name);
            }
            return tagNames;
        }
        const allNames = await iterateTags();
        return allNames;
    }
}


export { DataManager };