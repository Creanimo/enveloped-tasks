import Mustache from "../../node_modules/mustache/mustache.mjs";

/**
 * Base class for UI components.
 */
class UiComponent {
    /**
     * Creates an instance of UiComponent.
     * @param {string} id - The unique identifier for the component.
     * @param {string} label - The label for the component.
     */
    constructor(id, label) {
        this.id = id;
        this.label = label;
        this.templatePath = '';
    }

    /**
     * Gets the properties for rendering the component.
     * @returns {Object} The properties for rendering.
     */
    getRenderProperties() {
        return {
            id: this.id,
            label: this.label,
        };
    }

    /**
     * Sets the template path for the component.
     * @param {string} path - The path to the template file.
     */
    setTemplatePath(path) {
        this.templatePath = path;
    }

    /**
     * Renders the component using the specified template.
     * @returns {Promise<string>} The rendered HTML string.
     */
    async render() {
        try {
            const template = await this.#loadTemplate(this.templatePath);
            return Mustache.render(template, this.getRenderProperties());
        } catch (error) {
            console.error(`Error rendering component ${this.id}:`, error);
            return `<div>Error loading component</div>`;
        }
    }

    /**
     * Loads the template from the specified path.
     * @param {string} templatePath - The path to the template file.
     * @returns {Promise<string>} The template content.
     * @throws {Error} If the template cannot be loaded.
     * @private
     */
    async #loadTemplate(templatePath) {
        const response = await fetch(templatePath);
        if (!response.ok) {
            throw new Error(`Failed to load template: ${templatePath}`);
        }
        return await response.text();
    }
}

export { UiComponent };