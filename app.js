import { UiTextField } from "./view/ui-component/input/textfield/ui-textfield.js";
import { UiEditableTextLine } from "./view/ui-component/input/editableTextLine/ui-editableTextLine.js";
import { UiItem } from "./view/ui-component/item/item.js";

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

