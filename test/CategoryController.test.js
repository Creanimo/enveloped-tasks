import { expect } from 'chai';
import { CategoryController } from '../controller/category-controller.js';

describe('CategoryController', () => {
    let categoryController;

    beforeEach(() => {
        categoryController = new CategoryController();
    });

    it('should create a new category', () => {
        const data = {
            tasks: [
                { id: '1', title: 'Task 1', description: 'Description 1', completed: false, pinned: false, category: 'Work', tags: [], dueDate: '2024-08-01' },
                { id: '2', title: 'Task 2', description: 'Description 2', completed: false, pinned: false, category: 'Home', tags: [], dueDate: '2024-08-02' }
            ],
            name: 'My Category'
        };
        const category = categoryController.createCategory(data);
        expect(category.name).to.equal('My Category');
    });
});
