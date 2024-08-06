import { UiItem } from "../view/ui-component/item/item.js";

const mapTaskDataToUiItem = async (task) => {
    let _id = task.id;
    let _label =  task.title;
    const uiComponentItem = new UiItem(_id, _label);
    return uiComponentItem;
}

export { mapTaskDataToUiItem }