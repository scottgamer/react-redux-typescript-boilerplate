# React-Redux-Typescript Skeleton

This project is a front-end development framework built on top of React.

It offers a ready-to-use react template incluiding routing, authentication, notifications, connection to external API's, accessibility and responsive design.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Requirements

- typescript 3.6
- npm 6.12

---

## Quick start

1. Clone the repo to your local folder
1. Run `cp .env.example .env` command
1. Add your configuration to .env file
1. Run `npm install` command
1. Run `npm start` command

---

## Project Overview

The project uses the following frameworks and libraries:

- React 16.8.1
- Material UI 4.6.0
- React router DOM 5.1.2

## React

"A JavaScript library for building user interfaces" - React.

React follows the `html tags` syntax to define components.

A component in React is the basic visual-logical unit that allows building more complex components.

It follows the `seperation of concerns` pattern.

#### Quick example

```javascript
class HelloMessage extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name="Taylor" />, document.getElementById("hello-example"));
```

Learn more about React in the the official docs: [Getting Started](https://reactjs.org/docs/getting-started.html)

___

### Containers and components

The project follows the react convention of defining `containers` and `components` for better structuring.<br />

Containers deal with the application logic and state, whereas components deal with rendering views, both of which are built following the functional approach. <br />

functional approach:

```javascript
function ProfilePage(props) {
  const showMessage = () => {
    alert("Followed " + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return <button onClick={handleClick}>Follow</button>;
}
```

class-based approach:

```javascript
class ProfilePage extends React.Component {
  showMessage = () => {
    alert("Followed " + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>Follow</button>;
  }
}
```

Keep in mind that a container `contains` multiple components, each of which can also contain multiple child-components.

___

### Lifecycle methods

These methods can add custom functionality during different phases of a component.
These are available when the component is mounting, updates, and gets unmounted.

- componentWillMount()
- componentWillUpdate()
- componentWillReceiveProps()
- componentWillUnmount()

#### \*\* Important:

Though these methods can still be used to define class-based componentes, in React 16.11.0 are considered `legacy` and should be avoided.

Read more: [React component - Mounting](https://reactjs.org/docs/react-component.html#mounting)

___

### Hooks

Hooks are special functions that allow `hooking` funcitonality into a functional component.

This means that, instead of converting a functional component into a class-based component to manage state, we can still manage state in the functional component with hooks.

- useState()
- useEffect()

The useState() function works similar to this.setState() function used in a class-based component, allowing to change or update the state of a given component.

The useEffect() function works similar to the componenDidMount(), componentWillMount(), componentWillUpdate() lifecycle methods, allowing to re-render a component under certain conditions (HTTP requests, asynchronous functions, ...).

Read more: [React hooks - Overview](https://reactjs.org/docs/hooks-overview.html)

___

### Rules of Hooks

- Only call hooks at the top level: this ensures that hooks are called first when a component is rendering
- Only call hooks from react functions: this ensures that all stateful logic in a component is clearly visible

___

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---
