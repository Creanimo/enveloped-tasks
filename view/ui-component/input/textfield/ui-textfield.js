import { UiInput } from "../ui-input.js";

class UiTextField extends UiInput {
    /**
     * Single Line Text Field
     * @param {string} id 
     * @param {string} label 
     * @param {string} value 
     * @param {string} templatePath - The path to the template file.
     */
    constructor(id, label, value, templatePath = "/view/ui-component/input/textfield/ui-textfield.html") {
        super(id, label, value);
        this.setTemplatePath(templatePath); // Set the template path
    }
}

export { UiTextField };