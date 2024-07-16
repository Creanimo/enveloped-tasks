import { UiTextField } from "./view/ui-component/input/textfield/ui-textfield.js";

const textField = new UiTextField('text1', 'Enter Text', '');
textField.render().then(renderedHtml => {
    console.log(renderedHtml);
});