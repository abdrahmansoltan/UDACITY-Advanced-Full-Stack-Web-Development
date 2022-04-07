## INDEX

- [INDEX](#index)
- [Typing](#typing)
- [Installing](#installing)
  - [Configuring TypeScript](#configuring-typescript)
- [TypeScript Basics](#typescript-basics)
  - [Implicit Typing and Explicit Typing](#implicit-typing-and-explicit-typing)
  - [Types :](#types-)
  - [Type Assertions](#type-assertions)
  - [Type Aliases](#type-aliases)
  - [Classes](#classes)
    - [Access Modifiers](#access-modifiers)

---

## Typing

- JavaScript is `Weakly-Typed`.

  - This means that types are assigned by the interpreter based on the data and makes an educated guess when the code's intention is ambiguous. This can lead to unintended results.

- TypeScript is a static and strong typed superset of JavaScript. When we're done with our TypeScript code, it compiles to JavaScript.

- TypeScript Is A MUST for Large or Growing Teams

  - As a project/team grows larger, the room for errors in the development flow grows.

---

## Installing

- [refrence](https://classroom.udacity.com/nanodegrees/nd0067-fwd-t3/parts/cd0292/modules/c0ad589b-67b3-4791-931f-9b0fa8ac0ed3/lessons/f92490de-12fb-4c61-a74a-3889a4727954/concepts/061049c2-7fdf-4d69-868b-e51c64c7ceef)

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

---

## TypeScript Basics

### Implicit Typing and Explicit Typing

- `Implicit Typing`

  - TypeScript will automatically assume types of objects if the object is not typed.

  ```js
  const myNum = 3; // TypeScript implicitly types myNum as a number based on the variable
  ```

- `Explicit Typing`

  - The developer does explicit typing. The developer explicitly applies a type to the object.

  ```js
  let myVar: number = 3; // myVar has been explicitly typed as a number
  ```

### Types :

- `Union Types` : used when more than one type can be used

  ```js
  let studentPhone: number | string;
  studentPhone = "(555) 555 - 5555";
  studentPhone = 5555555555;
  ```

- `void` : used as a return type when the function returns **nothing**
- `never` : used as a return type when the function will never return anything, such as with functions that throw errors or infinite loops
- `unknown` : used when the type of the thing being typed is unknown. Used heavily for type assertion
- TypeScript offers 2 ways of working with `arrays`

  ```js
  // 1) Array
  let arr: string[]; // only accepts strings
  let arr2: (string | number)[]; // accepts strings or numbers

  // 2) Tuple
  // When you know exactly what data will be in the array, and you will not be adding to the array or modifying the type for any value
  let arr: [string, number, string]; // ['cat', 7, 'dog']
  ```

- `enum` : You use an enum when you have a constant set of values that will not be changed.
- `Objects and Interfaces`

  ```js
  // not good and hard to read
  let student: { name: string, age: number, enrolled: boolean } = {
    name: "Maria",
    age: 10,
    enrolled: true,
    // instead we use interfaces
  };
  ```

  - you create an abstract class as an `interface` for creating classes. With TypeScript, interfaces are simply used as the blueprint for the shape of something. Interfaces can be used to create functions but are most commonly seen to create objects.
  - Use `PascalCase` for naming `interfaces`.

  ```js
  interface Student {
    name: string;
    age: number;
    enrolled: boolean;
  }
  let newStudent: Student = { name: "Maria", age: 10, enrolled: true };
  ```

---

### Type Assertions

Type Assertions are used to tell TypeScript that even though TypeScript thinks it should be one type, it is actually a different type. Common to see when a type is unknown

```js
const myFunc = (student: unknown): string => {
  newStudent = student as string;
  return newStudent;
}
```

---

### Type Aliases

- Type aliases do not create a new type; they rename a type. Therefore, you can use it to type an object and give it a descriptive name. But like the object type, once a type alias is created, it can not be added to; it can only be extended.

### Classes

the big difference being our variables (properties) are typed, as are the parameters and return types for our constructor and methods.

```js
class Student {
  studentGrade: number;
  studentId: number;
  constructor(grade: number, id: number) {
    this.studentGrade = grade;
    this.studentId = id;
  }
}
```

#### Access Modifiers

used to declare how accessible a variable should be

- `public`
- `private` : private properties can only be accessed and modified from the class itself.
- `protected` : protected properties can be accessed by the class itself and child classes.

```js
// ex :
class Student {
  protected studentGrade: number;
  private studentId: number;
  public constructor(grade: number, id: number) {
    this.studentGrade = grade;
    this.studentId = id;
  }
  id(){
    return this.studentId;
  }
}

class Graduate extends Student {
  studentMajor: string; // public by default
  public constructor(grade: number, id: number, major: string ){
      super(grade, id);
      this.studentId = id; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
      this.studentGrade = grade; // Accessable because parent is protected
      this.studentMajor = major;
  }
}

const myStudent = new Graduate(3, 1234, 'computer science');

console.log(myStudent.id()); //  prints 1234
myStudent.studentId = 1235; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
console.log(myStudent.id()); // prints 1235
```

