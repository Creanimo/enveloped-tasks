import { Category } from "../model/lists/category.js";
import { mapDataToCategory } from "../utils/dataMapper.js";
import { DataManager } from "../model/datamanager.js";

class CategoryController {
    /**
     * 
     * @param {Category} categoryModel 
     */
    constructor(categoryModel = Category) {
        this.categoryModel = categoryModel;
    }

    createCategory(data) {
        const category = mapDataToCategory(data, this.categoryModel);
        // Save category to storage or database
        return category;
    }

    async getCategoryById(categoryId) {
        const categoryData = await DataManager.fetchCategoryById(categoryId);
        return new this.categoryModel(categoryData.taskIds, categoryData.name);
    }

    async renderCategory(categoryId) {
        const category = await this.getCategoryById(categoryId);
        const tasks = await category.getTasks(DataManager.fetchTaskById);
        // Render tasks
        console.log(tasks); // For testing purposes
    }
}

export { CategoryController };