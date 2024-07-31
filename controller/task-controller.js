import { Task } from "../model/task/task.js";
import { mapDataToTask } from "../utils/dataMapper.js";

class TaskController {
    /**
     * 
     * @param {Task} taskModel 
     */
    constructor(taskModel) {
        this.taskModel = taskModel;
    }

    createTask(data) {
        const task = mapDataToTask(data, this.taskModel);
        // Save task to storage or database
        return task;
    }
}

export { TaskController };