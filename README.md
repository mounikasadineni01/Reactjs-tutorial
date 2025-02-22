# React Js

- Is fas because it can do effiecent DOM manipulations using virtual DOM.

- ^ caret inmstall minor versions whereas tilde ~ install major versions

- JSX code is transpiled before it reaches the JS engine/browser- done by parcel because of babel

- JSX => React.createElement => React element- JS object => HTML element(render)

# React components

- 1. Class components - old
- 2. Functional components - normal js function that returns react element.

# Parcel

- Dev Build
- Local server
- HMRb:Hot module Replacement
- File watching algorithm written in C++
- Faster builds because of caching
- Image optimization
- Minification in production stage
- Bundling
- Compress files
- Consistent Hashing
- Code splitting
- Differential bundling - support older browsers
- Diagnostics
- error handling
- HTTPS hosting
- Tree shaking - remove unused code
- Different dev and prod builds

# React commands for execution

- Open Folder, create html,js and css files.
- html:5 in html page.
- Add <div id="root"></div>
    <script type="module" src="./src/App.js"></script>
- npm init-jest(test)
- npm install -D parcel. D means dev dependency
- npx parcel sample.html, npx parcel build sample.html(for production) and remove main in package.json (or) npm run start (or) npm start
- npm install react
- npm install react-dom
- In js file import react, create element and add: const root = ReactDOM.createRoot(document.getElementById("root"));root.render(<Sample />);

# React Hooks

- Normal JS Utility Functions
- useState() - super powerful state variables.
- useEffect()

# Reconcilliation Algorithm

- Virtual DOM is a representation of the actual DOM.- JS object
- React Fiber - Find difference between twi virtual DOMS's and update the actual DOM by rendering the UI.
