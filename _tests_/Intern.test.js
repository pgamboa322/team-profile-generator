const Intern = require('../lib/Intern');

test('creates object to hold intern', () => {
    const intern = new Intern('Test', 10, 'test@gmail.com', 'UofA');

    expect(intern.school).toEqual(expect.any(String));
});

test('role of intern', () => {
    const intern = new Intern('Test', 10, 'test@gmail.com', 'UofA');

    expect(intern.getRole()).toEqual("Intern");
});

test('school of intern', () => {
    const intern = new Intern('Test', 10, 'test@gmail.com', 'UofA');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

