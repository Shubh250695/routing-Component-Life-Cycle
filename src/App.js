import React from "react";
import "./styles.css";
import Tabs from "./components/Tabs";
import Mount from "./components/Mount";
import Updet from "./components/Updet";
import Unmount from "./components/Unmount";

function App() {
  return (
    <div>
      <h1>Component Life Cycle</h1>
      <a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">
        React lifecycle methods diagram
      </a>

      <Tabs>
        <div label="Mounting">
          <Mount />
        </div>

        <div label="Updating">
          <Updet />
        </div>

        <div label="Unmounting">
          <Unmount />
        </div>
      </Tabs>
    </div>
  );
}

export default App;
