import { UiInput } from "../ui-input.js";

class UiTextField extends UiInput {
    /**
     * Single Line Text Field
     * @param {string} id 
     * @param {string} label 
     * @param {string} value 
     * @param {string} templatePath - The path to the template file.
     */
    constructor(id, label, value, name = "ui-textfield", callOnBlur = (() => { return undefined; }), callFormCollect = (() => { return undefined; })) {
        super(id, label, value, name, callOnBlur, callFormCollect);
        const templatePath = "/view/ui-component/input/textfield/ui-textfield.html"
        this.setTemplatePath(templatePath);
    }
}

export { UiTextField };