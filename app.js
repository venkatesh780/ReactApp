import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "title1" }, "Hello World");
const heading2 = React.createElement(
  "h2",
  { className: "tittle2" },
  "Hello React"
);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
