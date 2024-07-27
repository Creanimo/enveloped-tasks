import { UiTextField } from "./view/ui-component/input/textfield/ui-textfield.js";
import { UiEditableTextLine } from "./view/ui-component/input/editableTextLine/ui-editableTextLine.js";

const textField = new UiTextField('text1', 'Enter Text', '');
const editableText = new UiEditableTextLine('sdf', "Click here to edit", "Editable Text", textField);

document.addEventListener("DOMContentLoaded", () => {
    const targetNode = document.body
    editableText.render(targetNode);
});

