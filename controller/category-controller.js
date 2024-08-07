import { DataManager } from "../model/datamanager.js";
import { mapTaskDataToUiItem } from "../utils/uiComponentMapper.js";
import { UiSortableList } from "../view/ui-component/input/sortableList/ui-sortablelist.js";
import { UiItem } from "../view/ui-component/item/item.js";
import { TaskController } from "./task-controller.js";

class CategoryController {
    

    /**
     * Create a UI Component object that can be rendered in the main app
     * @param {string} categoryId 
     * @param {UiSortableList} uiComponent - selected UI Components 
     * @returns {UiSortableList}
     */
    async fillUiComponent(categoryId, uiComponent) {
        const tasks = await DataManager.fetchTasksInCategory(categoryId);
        
        switch (uiComponent.constructor.name) {
            case "UiSortableList":
                let items = [];
                for (const task of tasks) {
                    const uiComponentItem = await mapTaskDataToUiItem(task);
                    items.push(uiComponentItem);
                }
                uiComponent.items = items;
                break;
        }
        
        return uiComponent;
    }    

    /*
    createCategory(data) {
        const category = mapDataToCategory(data, this.categoryModel);
        // Save category to storage or database
        return category;
    }


    
    */
}

export { CategoryController };
