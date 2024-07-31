import { Task } from "../task/task.js";
import { List } from "./list.js";

class Category extends List {
    /**
     * 
     * @param {Array<Task|null>} tasks 
     * @param {string} name 
     */
    constructor(tasks = [], name) {
        super(tasks);
        this.name = name;
    }
}

export { Category }