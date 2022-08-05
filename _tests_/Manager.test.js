const Manager = require('../lib/Manager');

test('creates a manager Object', () => {
    const manager = new Manager('Test', 10, 'test@test.com', 9);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('role of manager', () => {
    const manager = new Manager('Test', 10, 'test@test.com');

    expect(manager.getRole()).toEqual("Manager");
});