import { UiComponent } from "../ui-component.js";

class UiInput extends UiComponent {
    /**
     * Prototype for all UI Components of type UI Input.
     * @param {string} id 
     * @param {string} label 
     * @param {string} value 
     */
    constructor(id, label, value, name = "ui-input",) {
        super(id, label, name)
        this.value = value;
    }

    getRenderProperties() {
        return {
            ...super.getRenderProperties(),
            value: this.value,
        };
    }

    setEventListeners() {
        console.log(`UI Component ${this.id} didn't set any event listeners.`)
    }
}

export { UiInput };