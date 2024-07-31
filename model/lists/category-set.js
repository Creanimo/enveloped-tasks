import { Category } from "./category.js";
import { List } from "./list.js";

class CategorySet extends List {
    /**
     * 
     * @param {Category} categories 
     * @param {string} name 
     */
    constructor(categories = [], name) {
        super(categories);
        this.name = name;
    }
}

export { CategorySet }