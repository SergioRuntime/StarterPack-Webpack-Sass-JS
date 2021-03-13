import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

function App() {
  return <h1>Hello from REACT</h1>;
}

const container = document.getElementById("root");

ReactDOM.render(
<App />, 
container
);

if (module.hot) {
  module.hot.accept()
}
