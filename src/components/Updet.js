import React from "react";
import "/src/styles.css";

function Updet() {
  return (
    <div id="uping">
      <h2>Updating</h2>

      <div>
        The next phase in the lifecycle is when a component is updated. A
        component is updated whenever there is a change in the component's state
        or props.
      </div>
      <p>
        <div>
          React has five built-in methods that gets called, in this order, when
          a component is updated:
        </div>
        <h4>1. getDerivedStateFromProps()</h4>
        <div>
          Also at updates the getDerivedStateFromProps() method is called. This
          is the first method that is called when a component gets updated.{" "}
          <a href="https://codesandbox.io/s/getderivedstatesupexample-fjohs">
            example...
          </a>
        </div>

        <h4>2. shouldComponentUpdate()</h4>
        <div>
          In the shouldComponentUpdate() method you can return a Boolean value
          that specifies whether React should continue with the rendering or
          not.{" "}
          <a href="https://codesandbox.io/s/shouldcomponentupdateexample-fcl9o">
            example...
          </a>
        </div>

        <h4>3. render()</h4>
        <div>
          The render() method is of course called when a component gets updated,
          it has to re-render the HTML to the DOM, with the new changes.{" "}
          <a href="https://codesandbox.io/s/renderupexample-n7xjo">
            example...
          </a>
        </div>

        <h4>4. getSnapshotBeforeUpdate()</h4>
        <div>
          In the getSnapshotBeforeUpdate() method you have access to the props
          and state before the update, meaning that even after the update, you
          can check what the values were before the update. If the
          getSnapshotBeforeUpdate() method is present, you should also include
          the componentDidUpdate() method, otherwise you will get an error.{" "}
          <a href="https://codesandbox.io/s/getsnapshotexample-spxfh">
            example...
          </a>
        </div>

        <h4>5. componentDidUpdate()</h4>
        <div>
          The componentDidUpdate() method is called after the component is
          updated in the DOM.{" "}
          <a href="https://codesandbox.io/s/componentdidexample-bhswv">
            example...
          </a>
        </div>
      </p>
    </div>
  );
}

export default Updet;
