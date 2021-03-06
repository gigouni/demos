# 1. Express app Babel Debugger VS Code 

Just a personal reminder about the configs of VS Code's debugger while using BabelJS. 

<!-- TOC -->

- [1. Express app Babel Debugger VS Code](#1-express-app-babel-debugger-vs-code)
  - [1.1. Why using Babel](#11-why-using-babel)
    - [1.1.1. Why using ES6/7](#111-why-using-es67)
  - [1.2. Node.js + ES6/7](#12-nodejs--es67)
  - [1.3. Node.js + BabelJS](#13-nodejs--babeljs)

<!-- /TOC -->

## 1.1. Why using Babel

BabelJS (or Babel) transpiles ES6/ES7 source code to ES5, for compatibility conveniences with older browsers/environments.

So the question is rather _"Why using ES6/7?"_

### 1.1.1. Why using ES6/7

- Classes

```javascript
class Point {
  constructor() {
    // ....
  }
}
```

- `let` and `const`

```javascript
let foo = 'myMutableVariable'
foo = 'anotherValue' // works

const bar = 'my_constant'
bar = 'anotherValue' // fail
```

- template strings

```javascript
const name = 'John Doe'
console.log(`Hello ${name}`)
```

- arrow functions

```javascript
const whosTheGoodBoy: () => {
  console.log('Bark! Bark!')
}
```

- destructuring

```javascript
const myObject = {
  a: '1',
  b: true
}

const test: ({ a }) => {
  console.log(`Value of the property: ${a}`)
}

test(myObject) // Output: "Value of the property: 1"

// or even

// Before:
var width = 200;
var height = 400;

// After:
let [width, height] = [200, 400];
```

- spreading

```javascript
const myObject = {
  a: '1',
  b: true
}

const yourObject = {
  c: 42
}

const thirdObject = {
  ...myObject,
  ...yourObject
}

const test: obj => {
  console.log(`Value: ${JSON.stringify(obj)}`)
}

test(thirdObject)
// Output: "Value: { a: '1', b: true, c: 42 }"
```

- async/await

```javascript
async myFunction : () => {
 // some code...
 return await myLongFunction()
}
```

- for…of; entries()

```javascript
const towns = ["Causeway Bay", "Central", "Diamond Hill"]

for (let town of towns) {
  if (town === "Central")
    return
}

// or if you need i index

for (let [i, town] of towns.entries()) {
  towns[i] = `The great city of ${town}!`
}
```

- functions and default argument values

```javascript
function getImage(filename = "kitten.jpg") {
  return readFile(filename)
}
```

## 1.2. Node.js + ES6/7

Some of the following statements are coming from this article: [“An Update on ES6 Modules in Node.js” @jasnell](https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c) or even [Five-minute crash course in ES6, ES7 and Node](https://medium.com/@anton_ivanov/five-minute-crash-course-in-es6-es7-and-node-5eb2f16ce8a5).

- when having a JS frontend, permits to have the same ES version for both frontend and backend
- everything isn't Node.js native yet, like classes (cleaner syntax in ES6) and public/private fields
- Node 10 will use .mjs modules based on ES6/7/8, so we should syntactically align our codebase so we won't have to refactor the whole thing later
- permits to stay up-to-date with latest coding conventions
- `require` are __synchronous__, Node needs to evaluate to content of the whole CommonJS module to have the list of the usable functions
- `import` are __asynchronous__, Node can use the function as soon as the function is known, even if the module isn't fully read = gain performance
- syntactic sugar -> less code = improve the understanding of the code and the maintainability
- possibility to load CommonJS modules with `import` but cannot load ES6 modules with `require`
- integration of bunch of plugins with BabelJS (minimisation, etc...)

## 1.3. Node.js + BabelJS

Let's talk about something more ... real.

Imagine: you're having a project, divided in two sub-projects. The first one, the frontend. You're using VueJS and you're up-to-date with the latest features and coding conventions. The second sub-project, the backend. You've got a Node.js 8.11.1 LTS and wanted to use the latest features too.

__Why should you use BabelJS with your backend?__

(with pros and cons arguments)

- [pros] "Use BabelJS, you'll be able to use `import` instead of `require`!"
- [cons] "Okay, but BabelJS will transpile the code into `require`, what the interest?"
- [pros] "You won't have to refactor your business code when updating to Node.js 10, in september/october."
- [cons] "Okay but the refactor, I've to do it now, what's the difference? and Node.js 10 won't integrates, natively, the ES6/7/8 syntax?"
- [pros] "You can, from now on, use the new syntax and align your source code with the latest coding conventions."
- [cons] "Yes but BabelJS just bother us more than anything else..."
- [pros] "It's just configurations issues, like with your IDE, but we can fix it. BabelJS comes with plugins too, for minimisation by example. If we want to use ES8 features like `async loop` or change for Typescript (for some reasons), Babel will help you to."
