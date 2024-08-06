import { DataManager } from "../model/datamanager.js";
import { Task } from "../model/task/task.js";
import { mapDataToTask } from "../utils/dataMapper.js";

class TaskController {
    async getTaskById(taskId) {
        const taskData = await DataManager.fetchTaskById(taskId);
        return taskData;
    }

    /*
    createTask(data) {
        const task = mapDataToTask(data, this.taskModel);
        // Save task to storage or database
        return task;
    }
        */
}

export { TaskController };