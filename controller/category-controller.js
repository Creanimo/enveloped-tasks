import { Category } from "../model/lists/category.js";
import { mapDataToCategory } from "../utils/dataMapper.js";

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
}

export { CategoryController };