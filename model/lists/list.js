class List {
    /**
     * 
     * @param {Array} items 
     */
    constructor(items = []) {
        this.items = items;
    }

    addToTop(item) {
        this.items.unshift(item);
    }

    getByID(id) {
        return this.items.find(item => item.id === id);
    }
}

export { List };