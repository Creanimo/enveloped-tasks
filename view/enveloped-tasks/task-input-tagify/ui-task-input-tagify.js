import { UiInput } from "../../ui-component/input/ui-input.js";
import Tagify from '../../../node_modules/@yaireo/tagify/dist/tagify.esm.js'

class UiTaskInputTagify extends UiInput {
    constructor(id, label, value, name = "ui-input", callOnBlur = () => {}, callFormCollect = () => {}, fetchCategories = async () => [], fetchTags = async () => []) {
        super(id, label, value, name, callOnBlur, callFormCollect);
        const templatePath = "view/enveloped-tasks/task-input-tagify/ui-task-input-tagify.html";
        this.setTemplatePath(templatePath);
        fetchCategories().then(data => this.whitelistCategories = data)
        fetchTags().then(data => this.whitelistTags = data)
        this.tagify = {};
    }

    async render(targetNode) {
        await super.render(targetNode);
        const input = document.getElementById(this.id);
        console.log("TYPE OF whitelist: " + typeof(this.whitelistCategories))
        console.log("CONTENT whitelist: " + JSON.stringify(this.whitelistCategories));
        console.log('Input element:', input);  // Debugging statement
        let tagify = new Tagify(input, {
            mode: 'mix',
            pattern: /[\+\#]/,
            tagTextProp: 'text',
            whitelist: this.whitelistCategories.concat(this.whitelistTags).map(function(item){
                return typeof item == 'string' ? {value:item} : item;
            }),
            dropdown: {
                enabled: 1,
                position: 'text',
                mapValueTo: 'text',
                highlightFirst: true
            },
            callbacks: {
                add: console.log,
                remove: console.log
            }
        });
        this.tagify = tagify;
        this.setEventListeners();  // Call setEventListeners after initializing Tagify
    }

    setEventListeners() {
        super.setEventListeners();
        const searchWhitelist = (e) => {
            const prefix = e.detail.prefix;
            if (prefix) {
                if (prefix === '+') {
                    this.tagify.whitelist = this.whitelistCategories;
                } else if (prefix === '#') {
                    this.tagify.whitelist = this.whitelistTags;
                }

                if (e.detail.value.length > 1) {
                    this.tagify.dropdown.show(e.detail.value);
                }
            }
        };
        console.log(this.tagify)
        this.tagify.on('input', searchWhitelist);  // Ensure this.tagify is defined before setting the event listener
    }
}

export { UiTaskInputTagify };