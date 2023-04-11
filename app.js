const root = document.getElementById("root");

const container = document.createElement("div");
const heading1 = document.createElement("h1");
const heading2 = document.createElement("h2");

heading1.innerHTML = "Hello World";
heading2.innerHTML = "Hello React";

heading1.setAttribute("id", "title1");
heading2.setAttribute("class", "title2");
container.setAttribute("id", "container");

root.appendChild(container);
container.appendChild(heading1);
container.appendChild(heading2);
