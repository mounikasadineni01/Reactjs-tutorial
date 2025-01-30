import React from "react";
import ReactDOM from "react-dom/client";

/* const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello world"
); */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "Hello h1"),
    React.createElement("h2", { id: "heading2" }, "Hello h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Hello h1"),
    React.createElement("h2", { id: "heading2" }, "Hello h2"),
  ]),
]);

//JSX
const reactobj1 = <span>React element 2</span>;

const reactobj2 = (
  <h1 className="head">
    Hello React element
    {reactobj1}
  </h1>
);

//Functional components

//const Jsxheading = () => <h1 className="head">Hello jsx</h1>;

const Jsxheading = function () {
  return (
    <h1 className="head" tabIndex="5">
      Hello React component
    </h1>
  );
};

const number = 56;
//Component composition
const FC = () => {
  return (
    <div id="container">
      {reactobj2} {/*putting react element inside react component*/}
      {number} {/* JS code comment */}
      <h2>{number}</h2>
      <Jsxheading />
      {Jsxheading()}
      <h1 id="heading">Functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FC />);
