# 0x04-TypeScript

## Learning Objectives

* Why TypeScript programming is necessary
* How to install TypeScript
* How to use `types` and `specifying types` in TypeScript
* What is the difference between interface and type in TypeScript
* How to use `generics` in TypeScript
* How to use `namespaces` in TypeScript
* How to use `modules` in TypeScript
* How to use `ambient` modules to import libraries
* How to use TypeScript with `DOM`
* How to use TypeScript `namespaces` to organize your code
* What TypeScript `compiles` to
* How to use `decorators` in TypeScript
* How to use `uni

## Requirements

* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All your files will be executed on Ubuntu 18.04 LTS using `NodeJS 12.11.x`
* All your files should end with a new line
* Your code should use the `ts` extension when possible


## More Info

### Install TypeScript 4.1

```
$ npm install -g typescript
```

### Basic types Syntax

```
let varName: type;
```

### Interface Syntax

```
interface Name {
  property: type;
}
```

### Generic Syntax

```
function name<type>(args: type[]): type[] {
  // ...
}
```

### Namespace Syntax

```
namespace Name {
  export const varName: type;
  export function funcName(args: type[]): type[] {
    // ...
  }
  export namespace Name2 {
    // ...
  }
}
```

### Ambient Module Syntax

```
declare module 'name' {
  const varName: type;
  function funcName(args: type[]): type[];
  namespace Name2 {
    // ...
  }
}
```

### How to use

```
$ tsc 0-primitive
$ node 0-primitive.js
```

