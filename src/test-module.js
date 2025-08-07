// Simple test module for RepoGuard n8n workflow testing
// This file should trigger the workflow when committed

class TestModule {
    constructor() {
        this.initialized = true;
    }

    simpleFunction(input) {
        return input * 2;
    }

    anotherMethod() {
        console.log('Testing workflow trigger');
        return 'success';
    }
}

module.exports = TestModule;