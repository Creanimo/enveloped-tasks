import { expect } from 'chai';
import { TaskController } from '../controller/task-controller.js';

describe('TaskController', () => {
    let taskController;

    beforeEach(() => {
        taskController = new TaskController();
    });

    it('should create a new task', () => {
        const data = {
            id: '1',
            title: 'Test Task',
            description: 'This is a test task',
            completed: false,
            pinned: false,
            category: null,
            tags: [],
            dueDate: null
        };
        const task = taskController.createTask(data);
        expect(task.title).to.equal('Test Task');
    });
});