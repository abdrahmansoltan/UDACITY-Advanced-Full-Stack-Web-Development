## INDEX

- [INDEX](#index)
- [Testing](#testing)
  - [BDD vs TDD](#bdd-vs-tdd)
    - [Behavior Driven Development (BDD)](#behavior-driven-development-bdd)
    - [Test-Driven Development (TDD)](#test-driven-development-tdd)
  - [Test Design Best Practices](#test-design-best-practices)
- [Jasmine](#jasmine)
  - [Configuring Jasmine](#configuring-jasmine)

---

## Testing

- Introducing testing into your project as a priority and first action allows you to code in a way that writing concise and accurate code that takes into consideration edge cases right from the beginning
- `Unit tests` test individual pieces of code.

---

### BDD vs TDD

#### Behavior Driven Development (BDD)

- tests are focused on how the `user` interacts with the application
- A development style built on `Test Driven Development` where the focus is** user interaction and stakeholders**.
- `Jasmine` is recognized as a Behavior Driven Development testing framework.

#### Test-Driven Development (TDD)

- A development style where tests are written before development
- It focuses on writing unit and integration tests that produce expected results.
- Test Driven Development Cycle

  ![alt](./img/tdd.png)

---

### Test Design Best Practices

- Test file structure and file names should match the app.
- Describe and name the tests to be easy to read and maintain.
- Write short tests that allow you to pinpoint why the test is failing.
  - write tests with an `object` with data that `should pass` and test each value in the object.
  - Try this again with an object with data that should `fail`
- Tests should only fail when there are bugs in the tested code.

---

## Jasmine

### Configuring Jasmine

- bash

  ```bash
  npm i jasmine

  # Add a reporter for outputting Jasmine results to the terminal
  npm i jasmine-spec-reporter

  # Add type definitions for Jasmine
  npm i --save-dev @types/jasmine
  ```

- json

  ```json
  "scripts": {
    "build" : "npx tsc",
    "jasmine": "jasmine",
    "test": "npm run build && npm run jasmine"
  },
  ```

- File Structure

  ```bash
  ├── node_modules
  ├── spec
  │      └── support
  │           └── jasmine.json
  ├── src
  │     ├──  tests
  │     │     ├── helpers
  │     │     │      └── reporter.ts
  │     │     └── indexSpec.ts
  │     └── index.ts
  ├── package-lock.json
  ├── package.json
  └── tsconfig.json
  ```

- configure the reporter to display Jasmine results to your terminal application -> [reporter.ts](../1-Backend%20Development%20with%20Node.js/Configuring%20Jasmine/reporter.ts)

- configurations for a basic Jasmine configuration -> [jasmine.json](../1-Backend%20Development%20with%20Node.js/Configuring%20Jasmine/jasmine.json)

- In the `tsconfig.json` file, add "`spec`" to the list of folders that we want to exclude as it doesn't has `ts` files it it

  ```json
    "exclude": ["node_modules", "./dist", "spec"]
  ```

- we write the tests in `indexSpec.ts` file

- 
