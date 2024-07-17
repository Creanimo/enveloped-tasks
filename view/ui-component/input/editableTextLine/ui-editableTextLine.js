import { UiInput } from "../ui-input.js";
import { ClassToggler } from "../../../tools/toggleClass.js";

class UiEditableTextLine extends UiInput {
    /**
     * Single Line Text Field
     * @param {string} id 
     * @param {string} label 
     * @param {string} value 
     * @param {string} templatePath - The path to the template file.
     * @param {UiInput, UiTextField} inputWhenEditing - switches to this component during edit mode
     */
    constructor(id, label, value, inputWhenEditing, name = "ui-editableTextField") {
        super(id, label, value, name);
        this.inputWhenEditing = inputWhenEditing

        const templatePath = "/view/ui-component/input/editableTextLine/ui-editableTextLine.html"
        this.setTemplatePath(templatePath); // Set the template path
    }

    async getRenderProperties() {
        const nestedComponent = await this.inputWhenEditing.render();
        return {
            ...super.getRenderProperties(),
            nestedComponentRender: nestedComponent.outerHTML,
        };
    }

    setEventListeners() {
        const viewVisibility = new ClassToggler(`${this.name}-${this.id}`, `ui-editableTextLine__viewer`, 'hidden');
        const editorVisibility = new ClassToggler(`${this.name}-${this.id}`, `ui-editableTextLine__editor`, 'hidden');

        const editButton = document.getElementById(`${this.name}-${this.id}_editableTextButton`);
        if (editButton) {
            const enterEdit = () => {
                viewVisibility.toggleClassMethod();
                editorVisibility.toggleClassMethod();
                console.log("Enter Edit was clicked");
            };
            editButton.addEventListener("click", enterEdit);
            console.log("Event Listener is in place");
        } else {
            console.error(`No edit button found with ID "${this.name}-${this.id}_editableTextButton"`);
        }

        this.inputWhenEditing.setEventListeners();
    }
}

export { UiEditableTextLine };


