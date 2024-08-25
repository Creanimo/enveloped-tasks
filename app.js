import { UiTextField } from "./view/ui-component/input/textfield/ui-textfield.js";
import { UiEditableTextLine } from "./view/ui-component/input/editableTextLine/ui-editableTextLine.js";
import { UiItem } from "./view/ui-component/item/item.js";
import { CategoryController } from "./controller/category-controller.js";
import { UiSortableList } from "./view/ui-component/input/sortableList/ui-sortablelist.js";
import { UiTaskInputTagify } from "./view/enveloped-tasks/task-input-tagify/ui-task-input-tagify.js";

// defining all Controllers to fetch Data
const categoryController = new CategoryController;

// all UI components in this view
const brainDumpCategoryList = new UiSortableList("braindDump","Brain Dump", [])
// const TextFieldToTestThings = new UiTextField("asd", "My super cool textfield", "");
const taskInputField = new UiTaskInputTagify("dsxjzhgbf", "Add your task:", "", "addTask", () => {}, () => {}, () => { return ["work", "private"]}, () => { return ["urgent", "difficult", "easy"]});

// filling UI components with data
const buildBraindDumpList = async () => {
    const brainDumpList = await categoryController.fillUiComponent("2", brainDumpCategoryList);
    return brainDumpList;
}

document.addEventListener("DOMContentLoaded", () => {
    // placing UI components
    const targetNode = document.body;
    buildBraindDumpList().then(brainDumpList => {
        brainDumpList.render(targetNode);
    })
    taskInputField.render(targetNode);
    // TextFieldToTestThings.render(targetNode);
});


/*
const textField = new UiTextField('text1', 'Enter Text', '');
const editableText = new UiEditableTextLine('sdf', "Click here to edit", "Editable Text", textField);

const itemList =  {
    itemA: {
        id: 'itemID-A',
        label: 'My first to do item',
    },
    itemB: {
        id: 'itemID-B',
        label: 'Another thing I have to do',
    },
    itemC: {
        id: 'itemID-C',
        label: "Don't forget to do this",
    },
}




const itemA = new UiItem('itemID-A', 'My first to do item');

document.addEventListener("DOMContentLoaded", () => {
    const targetNode = document.body;
    editableText.render(targetNode);

    for (var key in itemList) {
    	    const obj = itemList[key]
            const item = new UiItem(obj['id'], obj['label']);
            item.render(targetNode); 
    }
        
});

*/