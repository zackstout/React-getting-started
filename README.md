
# React App
*Vid 1*:
- `create-react-app react-starter` to spin up app.

- `src/index.js` kicks it all off, loads in `src/App.js`.

- Note: work in VS Code to avoid Atom's linter errors.

- Webpack, implemented by React, allows us to use `import`.

*Vids 2-4*:
- Always use `super` and `props` for constructors, so you never have to worry about needing it.

- React abhors 2-way binding because of its difficulty to debug.

- React doesn't want us to mutate state directly; it wants us to use its built-in `setState()`.

- Can see the problem (so many methods, all so similar, all needing the bind) that is going to give rise to currying.

*Vid 5*:
- Spread operator (...) is ES6 syntax. Its purpose is to make immutability easier to achieve.

- Instead of `arr.push(5)`, we say `newArr = [...arr, 5]`. Similarly, `newObj = {...obj, name: newName}`.

*Vids 6-7*:
- Note: need to use bracket notation for variable names of object keys: `[propName] = this.user....`.

- Nice, with currying, because we're using arrow functions, we no longer need `.bind(this)`.

*Vid 8*:
- We can write a click handler to log the current user values and clear them out, which updates the state, but not yet the input fields: No 2-way binding.

- So we have to set `value={this.state.user.name}` to the input manually.

- The default behavior of a form is to refresh the page by going to a different URL (e.g. `localhost3000/?`). So we have to preventDefault.

*Vid 9*:
- In order to splat something onto the DOM, use `JSON.stringify(___)`.

- Note: JSX elements need to all be wrapped within a single parent `div`.

- React can't directly display objects to the DOM, but it *can* display arrays.

*Vids 10-11*:
- Use .map() to avoid mutating state arrays (React's version of `ng-repeat`).

*Vid 12*:
- Users can add stars to the list which updates on the DOM.

*Vid 13*:
- `this.props` allows us to pass functions and data from the hosting component (e.g. App.js) to the hosted component (e.g. Header.js or NewStar.js).
- But why wouldn't we just put those functions and that data in the component, where they should live?

*Vid 14*:
- Axios for basic HTTP requests.


- I wonder why we need `nodemon` to run the server scripts in the student list project. `npm start` *seemed* like it worked fine.