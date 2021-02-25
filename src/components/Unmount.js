import React from "react";

function Unmount() {
  return (
    <div id="uming">
      <h2>Unmounting</h2>

      <div>
        The next phase in the lifecycle is when a component is removed from the
        DOM, or unmounting as React likes to call it.
      </div>
      <p>
        <div>
          React has only one built-in method that gets called when a component
          is unmounted:
        </div>
        <h4>1. componentWillUnmount()</h4>
        <div>
          The componentWillUnmount method is called when the component is about
          to be removed from the DOM.{" "}
          <a href="https://codesandbox.io/s/componentwillunmountexample-vtxm7">
            example...
          </a>
        </div>
      </p>
    </div>
  );
}

export default Unmount;
