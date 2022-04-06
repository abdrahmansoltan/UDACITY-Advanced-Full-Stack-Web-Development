## INDEX

- [INDEX](#index)
- [Typing](#typing)
- [Installing](#installing)
  - [Configuring TypeScript](#configuring-typescript)

---

## Typing

- JavaScript is `Weakly-Typed`.

  - This means that types are assigned by the interpreter based on the data and makes an educated guess when the code's intention is ambiguous. This can lead to unintended results.

- TypeScript is a static and strong typed superset of JavaScript. When we're done with our TypeScript code, it compiles to JavaScript.

- TypeScript Is A MUST for Large or Growing Teams

  - As a project/team grows larger, the room for errors in the development flow grows.

---

## Installing

```bash
$ npm i typescript    # save to dependencies
$ npm i typescript --save-dev    # save to devDependencies

npm i --save-dev ts-node

npm i --save-dev @types/node

```

- To use TypeScript, you need to add a script to your `package.json` file to `compile` TypeScript to JavaScript. This is generally called your "`build`" script

  - this command will `transpile` TypeScript to JavaScript

  ```json
  "scripts": {
      "build": "npx tsc"
    },
  ```

### Configuring TypeScript

- Add the default TypeScript configuration file

  ```bash
  $ npx tsc --init
  ```

- `tsconfig.json` -> This config file is also where you can tell TypeScript how strict it should be while checking your code and what to ignore. If you're moving a project to TypeScript, you can gracefully integrate TS by working with the settings in this config file.

- Helpful configurations to note:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["ES2018", "DOM"],
    "outDir": "./build",
    "strict": true,
    "noImplicitAny": true
  },
  "exclude": ["node_modules", "tests"]
}
```

- target - sets what version of JS TypeScript will be transpiled to.
- module - sets what module system will be used when transpiling. - Node.js uses the common.js module system by default
  lib - is used to say what libraries your code is using. In this case, ES2018 and the DOM API
- outDir - where you want your src code to output to. Often named build, prod, or server (when using it serverside)
- strict - enable strict typing
- noImplicitAny - disallow the "any" type (covered in TypeScript Basics)
- exclude - directories to exclude in compiling
