import React from "react";
import "/src/styles.css";

function Mount() {
  return (
    <div id="ming">
      <h2>Mounting</h2>

      <div>Mounting means putting elements into the DOM.</div>
      <p>
        <div>
          React has four built-in methods that gets called, in this order, when
          mounting a component:
        </div>

        <h4>1. constructor()</h4>
        <div>
          The constructor() method is called before anything else, when the
          component is initiated, and it is the natural place to set up the
          initial state and other initial values.{" "}
          <a href="https://codesandbox.io/s/constructorexample-4khk5">
            example...
          </a>
        </div>

        <h4>2. getDerivedStateFromProps()</h4>
        <div>
          The getDerivedStateFromProps() method is called right before rendering
          the element(s) in the DOM. This is the natural place to set the state
          object based on the initial props.{" "}
          <a href="https://codesandbox.io/s/getderivedstate-example-0yh52">
            example...
          </a>
        </div>

        <h4>3. render()</h4>
        <div>
          The render() method is required, and is the method that actually
          outputs the HTML to the DOM.{" "}
          <a href="https://codesandbox.io/s/renderexample-b625q">example...</a>
        </div>

        <h4>4. componentDidMount()</h4>
        <div>
          The componentDidMount() method is called after the component is
          rendered. This is where you run statements that requires that the
          component is already placed in the DOM.{" "}
          <a href="https://codesandbox.io/s/componentdidmountexample-m3fh0">
            example...
          </a>
        </div>
      </p>
    </div>
  );
}

export default Mount;
