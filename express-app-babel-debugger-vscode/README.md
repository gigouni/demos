# 1. Express app Babel Debugger VS Code

Just a personal reminder about the configs of VS Code's debugger while using BabelJS.

<!-- TOC -->

- [1. Express app Babel Debugger VS Code](#1-express-app-babel-debugger-vs-code)
    - [1.1. Why using Babel?](#11-why-using-babel)
        - [1.1.1. Why using ES6/7?](#111-why-using-es67)

<!-- /TOC -->

## 1.1. Why using Babel?

BabelJS (or Babel) is used to transpile ES6/ES7 source code to ES5, for compatibility conveniences with older browsers/environments.

So the question is rather _"Why using ES6/7?"_

### 1.1.1. Why using ES6/7?

* Classes

```javascript
class Point {
    constructor() {
        // ....
    }
}
```

* `let` and `const`

```javascript
let foo = 'myMutableVariable'
foo = 'anotherValue' // works

const bar = 'my_constant'
bar = 'anotherValue' // fail
```

* template strings

```javascript
const name = 'myComplexNameOrAnyOtherString'
console.log(`Hello ${name}`)
```

* arrow functions
* destructuring
* spreading

