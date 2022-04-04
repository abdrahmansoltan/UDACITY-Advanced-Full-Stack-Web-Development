## INDEX

- [INDEX](#index)
- [Backend](#backend)
  - [History of Backend Development](#history-of-backend-development)
- [Node.js](#nodejs)
  - [Node.js and the V8 Engine](#nodejs-and-the-v8-engine)
  - [Common JS Module System](#common-js-module-system)
  - [Process Module](#process-module)
  - [Path Module](#path-module)

---

## Backend

- The backend is responsible for processing the requests that come into the app and managing its data.
- A Backend Consists of Three Parts:
  - `server` : the computing resource that listens to requests from the frontend
  - `Application` : code that runs on the server to process requests and return responses
  - `database` : the part of the backend that is responsible for storing and organizing data

### History of Backend Development

- The `LAMP stack` => (standing for Linux, Apache, MySQL, and PHP)

---

## Node.js

- `REPL` stands for [Read, Evaluate, Print, and Loop]
  - To access the Node.js REPL environment, run: `$node`
  - To run `index.js` use:
    - `$node src/index.js`
    - `$node src/index`
    - `$node src/.`
    - `$node src`
  - To run other files use:
    - `$ node src/path-to-file.js`
    - `$ node src/path-to-file`

### Node.js and the V8 Engine

![engine](./img/how%20js%20works.jpg)

- Node.js used the `Common JS module` system to break code into smaller chunks. TypeScript (a JavaScript superset) compiles to the Common JS Module System.

### Common JS Module System

- The module system creates the ability to export and import JavaScript from separate files.

  - `export`

    ```js
    // working file = util/logger.js

    // exports as object
    module.exports = {
      myFirstFunction: myFirstFunction,
      mySecondFunction: mySecondFunction,
    };

    // using ES6 shorthand property names
    module.exports = {
      myFirstFunction,
      mySecondFunction,
    };
    ```

  - `Require`

    - When using `require`, a preceding slash must come before a locally created module name; otherwise, Node.js will search the core modules and then node_modules.

    ```js
    // working file = index.js
    // all functions in util/logger.js are available
    const logger = require("./util/logger.js");

    // using ES6 object destructuring, only myFirstFunction is available
    const { myFirstFunction } = require("./util/logger.js");
    ```

  - `dirname` and `filename`

    ```js
    // working file = /app/util/logger.js

    console.log(__dirname);
    // prints /app/util

    console.log(__filename);
    // prints /app/util/logger.js
    ```

### Process Module

Not found in the browser APIs, Process relates to the global node execution process which occurs when you run a js file through Node.js.

- The Process module contains the ability to perform tasks immediately before the process exits, and when it exits.

  - `beforeExit` allows for asynchronous calls which can make the process continue.
  - `exit` only happens once all synchronous and asynchronous code is complete.

    ```js
    // create conditions for exit code options
    // example: 0 typically implies without errors, 1 with.

    process.exitCode = 1;

    process.on("beforeExit", () => {
      console.log("beforeExit event");
    });

    process.on("exit", (code) => {
      console.log(`exit event with code: ${code}`);
    });
    ```

- `process.env`

  - Process.env gives you access to the environment information of your Node.js application. It also allows you to add environment variables that can be used if your code is dependent on the environment it is run in.

- `process.stdout` it's like `console.log` but it does not force a new line break. This allows you to create helpful tools like progress bars.

- `process.argv`
  - An array containing your console arguments information for your executed process.
- `process.nextTick`
  - Allows you to run JavaScript between the different phases of the event loop. process.nextTick will be described in detail when discussing the event loop.

### Path Module

Using the path module allows us to normalize paths to work across platforms(Windows/Mac/Linux).

- The path module must be imported via `require('path')`. Once imported, there are three commonly used options

```js
const path = require("path");

// Enables you to get the absolute path from a relative path.
console.log(path.resolve("index.js"));
// prints /Users/user/Desktop/app/index.js

// Normalizes any path by removing instances of . , turning double slashes into single slashes and removing a directory when .. is found.
console.log(path.normalize("./app//src//util/.."));
// prints app/src

// Used to concatenate strings to create a path that works across operating systems. It joins the strings, then normalizes the result.
console.log(path.join("/app", "src", "util", "..", "/index.js"));
// prints  /app/src/index.js
```
