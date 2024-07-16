import { UiComponent } from "../ui-component.js";

class UiInput extends UiComponent {
    /**
     * Prototype for all UI Components of type UI Input.
     * @param {string} id 
     * @param {string} label 
     * @param {string} value 
     */
    constructor(id, label, value) {
        super(id, label)
        this.value = value;
    }

    getRenderProperties() {
        return {
            ...super.getRenderProperties(),
            value: this.value,
        };
    }
}

export { UiInput };