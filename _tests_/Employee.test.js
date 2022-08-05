const Employee = require("../lib/Employee");

test("new object employee created", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Set name by constructor", () => {
  const name = "Otis";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Set email by constructor", () => {
    const testValue = "test@gmail.com";
    const e = new Employee("Test", 1, testValue);
    expect(e.email).toBe(testValue);
  });

test("Set id by constructor", () => {
  const testValue = 100;
  const e = new Employee("Test", testValue);
  expect(e.id).toBe(testValue);
});


test("Get name by getName()", () => {
  const testValue = "Otis";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Get email by getEmail()", () => {
    const testValue = "test@gmail.com";
    const e = new Employee("Test", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });

test("Get id by getId()", () => {
  const testValue = 100;
  const e = new Employee("Test", testValue);
  expect(e.getId()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Otis", 1, "test@gmail.com");
  expect(e.getRole()).toBe(testValue);
});