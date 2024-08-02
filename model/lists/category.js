import { Task } from "../task/task.js";
import { List } from "./list.js";

class Category extends List {
    /**
     * 
     * @param {Array<object>} tasks 
     * @param {string} name 
     */
    constructor(tasks = [], name) {
        super(tasks);
        this.name = name;
    }
}

export { Category }