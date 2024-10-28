## Best Practices - Code Efficiency

### Lazy loading - to reduce the code bundle size, to build large scale performant application.

- Chunking
- Code Splitting
- Dynamic Bundling
- Dynamic Import
- On Demand Loading

```javascript
const ComponentName = lazy(() => import('./pathOfComponent'));
```

- It is important to wrap lazy loaded component inside `Suspense` else render of that component will be suspended and throw error, bcz react tries to render that component quickly but it takes some time to fetch the data.

```javascript
{
  path: '/route/:id',
    element: (
      <Suspense fallback={<Loading />}>
        <ComponentName />
      </Suspense>
    ),
},
```

### redux-toolkit uses immer.js behind the scenes.

- The job of immer is to create deep clone of your state in such a way :

```
Original State + Copy of that State = Calculated diff between both and returns copy.
```

### 🚀 `To install a package we use npm and to execute a package we use npx command.`

## Packages to install:

1. Start with npm init (it create package.json)
2. npm i -D parcel (-D refers to dev-dependency)
3. Install react, react-dom, react-router-dom as normal dependency
4. Tailwind css
5. @reduxjs/toolkit (for creation of store) and react-redux (for providing store to react)

## What is Parcel doing for us ?

- Dev Build
- Local Server
- Hot Module Replacement (HMR). Automatic reloding page on save.
- It uses File Watching Algorithm - written in C++
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - it gives support of older browsers.
- Diagnostic - beautiful errors
- Error Handling
- HTTPs
- Tree Shaking - remove unused code.
- Different dev and production bundles.

## Learnings from Namaste React while making this project:

- One of the reason for react is fast is it uses virtual dom, diff algo., reconciliation.

- Virtual DOM helps in rendering only those components which have changed instead of re-rendering all component.

- Virtual DOM helps in optimizing rendering by comparing old and new state of components. It only updates.

- Virtual DOM is the object representation of Actual DOM.

- `Reconciliation aka react-fiber` is, The algorithm React uses to diff one tree with another to determine which parts need to be changed.

- In React, a component is a piece of reusable code that represents a part of a user interface. Components are used to render, manage, and update the UI elements in your application.

- package.json is a configuration for npm.

- npm is a package manager. Collection of packages.

- create-react-app uses webpack and babel bts.

- Two type of dependencies we can install : 1) Dev-dependencies (used in development phase) 2) Normal (production).

- Packages are aka dependencies. node_modules is a collection of dependencies.

- If you have `package.json` & `package-lock.json`, you can recreate/install all your node_modules.

- Most imp. package in our project is a bundler. (webpack, parcel, vite, etc...)

- `JSX - HTML-like or XML-like syntax.`

- JSX => Babel transpiles it to React.createElement => JS Object => HTMLElement(render) => And this all done by Babel. Babel is converting JSX to React.createElement.

` Load -> Render -> API call -> Re-render`

- Two ways to create Components in react: 1) Class Based (old) and 2) Functional Based Compponents (new).

- In class based component,

```
class Name extends React.Component {
  constructor(props) {
  super(props);
  }
  render() {
    return (...)
  }
}
```

this is how it is written and inside constructor this.state={something: 1,} & to update this.setState({something: this.state.something+1}) inside return statement.

- `componentDidMount()` is used to make api calls

- A f`unctional component` is normal JS function that returns JSX code or React element.

- `Component Composition` -> Component inside ReactComponent.

- `Functional components` are JS functions and Props are like passing arguments to functional components.

- `ConfigDrivenUI` - data is driven by config with the help of backend api. In short different content for different locations.

- Two types of export/import.

  ```
  export default componentName;
  ```

  ```
  import componentName from "path"
  ```

  - using export keyword infront of variable is `named export`

  ```
  import { name } from "path"
  ```

- `Lazy Loading` -> Lazy loading is a technique used to improve the performance of a web application by loading specific components or code chunks only when they are needed, rather than loading everything upfront. (In short Import code for a particular page when required to avoid large file size).

  - Lazy loading also known as:
    - Chunking
    - Code Splitting
    - Dynamic Bundling
    - On Demand loading
    - Dynamic import

- `Higher order components` is a normal javascript function, that takes a component and returns a component.

  - It takes an existing component, enhances it, adds some extra features to component and return it.

- `React Context` avoids problem called `props drilling` aka `prop passing`.

  - Prop drilling involves sending props from one component to another, and potentially passing them through several intermediate components (higher-level component to a lower-level component in a component hierarchy).
  - For example -
    - If I had to send prop from top level node to leaf node level, I need to pass that props to intermediate children and then they need to pass that prop to next level in order to reach leaf node. This is what prop drilling is.

- `Context` is a feature that allows you to share data across the component tree without having to pass props manually at every level. It provides a way to create a global state or shared data that can be accessed by any component within the tree.

## React Hooks

- Normal JS utility functions

- Whenever a state variable updates, react re-render the components.

- There are multiple hooks in react but here are 2 very imp hooks:

  - useState() -> used to generate powerful state variables in react. If you want to make your component dynamic, this is where useState variables comes.
  - useEffect() -> used when we have to make an external api calls, useEffect() will be called after the component rendered.

- Whenever state variables update, react triggers a reconciliation cycle(re-renders the component).

## 2 Types of Routing in web apps

- Client Side Routing
- Server Side Routing -> refreshes whole page if we have to navigate into the other page(`<a href="/">` tag in html)

## Redux Toolkit

- `Redux` and `React` are two different libraries.

- `Redux` is a centralized state management library.

- `Redux` is a library that is used for `managing state (state management)`. Redux works with other libraries as well but it is heavily used with react. There is a library called `zustand` which is similar to redux.

- There is a UI Layer and a Data Layer. `Redux works in the data layer of our application`. And, UI and the Data layer works in sync and build our react app.

- `Redux is not mandatory in small or mid size projects.`

- In large scale application, where the data is heavily used, where the lot of read and write operations are happening in the react application (lot of components or lot of data is being transfered between components). Then using Redux make sense with React Application.

- Redux is helpful for managing large scale application. Here are some advantages/uses:

  - Used to handle state of application
  - Handing data
  - Managing store
  - Redux offers Easy debugging

- Redux is in Central Place and Redux contains `slices` in it. A slice can be

  - Cart
  - Theme: dark/light
  - Login/Signup

- In Redux we have `Action`, `Reducers`, `Store`, `Selectors`.
  - User clicks the Add button on the menu page.
  - This triggers a `dispatch` with an `action` (let's call it ADD_TO_CART).
  - `Action` calls the `reducer function` associated with the Cart slice receives this action and updates the state by incrementing the cart value.
  - The `Cart` is subscribed to the slice using `selector`.

## Store creation using Redux Toolkit

- To create our store we use:
  - npm package `@reduxjs/toolkit` (for creation of store)
- To provide (connect with react) we use:
  - npm package `react-redux` (for providing store to react)

## Types of testing (developer)

- Unit Testing
  - Testing a react component in isolation
  - For eg: Testing a specific small unit of a individual component (Header component)
- Integration Testing
  - Testing that invloves multiple component talking with each other
  - For eg: Search functionality.
- End to End Testing (e2e)

## Testing

- `React testing library` is built on top of `DOM testing library`
- `React testing library` uses `jest`

## Setting up testing in our app

1. Install React Testing Library

```
npm i -D @testing-library/react
```

2. Install jest

```
npm i -D jest
```

3. Install Babel dependencies

```
npm i -D babel-jest @babel/core @babel/preset-env
```

4. Configure babel

- Create `babel.config.js`
- Check this official docs for more info:

```
https://jestjs.io/docs/getting-started
```

5. Configure `.parcelrc` file to disable default babel transpilation

- Check this official docs for more info:

```
https://parceljs.org/languages/javascript/#usage-with-other-tools
```

6. To run test cases(jest)

```
npm run test
```

7. Writing Jest configuration

- To initialise a jest:

```
npx jest --init
```

- After running the following command, it will ask some questions:
  - Would you like to use Typescript for the configuration file? › `no`
  - Choose the test environment that will be used for testing › `jsdom (browser-like)`
  - Do you want Jest to add coverage reports? › `yes`
  - Which provider should be used to instrument code for coverage? › `babel`
  - Automatically clear mock calls, instances, contexts and results before every test? › `yes`
- this will automatically create `jest.config.js` file.

8. Install jsdom library

```
npm install --save-dev jest-environment-jsdom
```
