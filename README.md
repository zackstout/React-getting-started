# React App
`create-react-app react-starter` to spin up app.

`src/index.js` kicks it all off, loads in `src/App.js`.

Note: work in VS Code to avoid Atom's linter errors.

Webpack, implemented by React, allows us to use `import`.

Always use `super` and `props` for constructors, so you never have to worry about needing it.

React abhors 2-way binding because of its difficulty to debug.

React doesn't want us to mutate state directly; it wants us to use its built-in `setState()`.

Can see the problem (so many methods, all so similar, all needing the bind) that is going to give rise to currying.

Spread operator (...) is ES6 syntax. Its purpose is to make immutability easier to achieve.

Instead of `arr.push(5)`, we say `newArr = [...arr, 5]`. Similarly, `newObj = {...obj, name: newName}`.

Note: need to use bracket notation for variable names of object keys: `[propName] = this.user....`.

Nice, with currying, because we're using arrow functions, we no longer need binding.