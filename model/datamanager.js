const mockData = {
    "tasks": {
        "1": {
            "id": "1",
            "title": "Task 1",
            "description": "Description for Task 1",
            "completed": false,
            "pinned": false,
            "category": "1",
            "tags": ["urgent"],
            "dueDate": "2024-08-10T00:00:00Z"
        },
        "2": {
            "id": "2",
            "title": "Task 2",
            "description": "Description for Task 2",
            "completed": false,
            "pinned": true,
            "category": "2",
            "tags": ["important"],
            "dueDate": "2024-08-15T00:00:00Z"
        },
        "3": {
            "id": "3",
            "title": "Task 3",
            "description": "Description for Task 2",
            "completed": false,
            "pinned": true,
            "category": "2",
            "tags": ["important"],
            "dueDate": "2024-08-15T00:00:00Z"
        }
    },
    "categories": {
        "1": {
            "name": "Work",
            "taskIds": ["1"]
        },
        "2": {
            "name": "Personal",
            "taskIds": ["2","3"]
        }
    }
};

class DataManager {
    static async fetchTaskById(id) {
        return mockData.tasks[id];
    }
    static async fetchCategoryById(id) {
        return mockData.categories[id];
    }
}

export { DataManager };