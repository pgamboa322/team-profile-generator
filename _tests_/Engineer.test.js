const Engineer = require("../lib/Engineer");

test("Set github account by constructor", () => {
  const testValue = "githubUser";
  const e = new Engineer("Test", 1, "test@gmail.com", testValue);
  expect(e.github).toBe(testValue);
});

test("Can get GitHub username by getGithub()", () => {
    const testValue = "githubUser";
    const e = new Engineer("Test", 1, "test@gmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
  });

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Test", 1, "test@gmail.com", testValue);
  expect(e.getRole()).toBe(testValue);
});

