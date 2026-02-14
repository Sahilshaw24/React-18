import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// React element using JSX (jSX element is a syntax extension for JavaScript that looks similar to HTML and is used to describe the UI in React)
// const heading = <h1 id="heading">React Element from JSX </h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// React component using JSX (JSX Component is a function that returns JSX)
// const Heading = () => {
//   return <h1 id="heading">React Component from JSX </h1>;
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Heading />);

// JSX Component with Props (Props are a way to pass data from parent to child component in React)
// const Heading = (props) => {
// console.log(props); Props is an object that contains all the properties passed to the component
//   return (
//     <div>
//       <h1>{props.text}</h1>
//       <h1>{props.msg}</h1>
//     </div>
//   );
// };
// const Propss = () => {
//   return (
//     <div>
//       <Heading text="Heading 1 from Props" msg="Message 1 from Props" />
//     </div>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Propss />);

// what is useState asynchronous
// useState is a hook that allows you to add state to a functional component in React. It is asynchronous because it does not update the state immediately, but rather schedules an update for the next render. This means that if you try to access the state immediately after calling the setState function, you will get the old state value instead of the updated one. To get the updated state value, you can use the useEffect hook to listen for changes in the state and perform actions accordingly.

const App = () => {
  return (
    <div>
      <Home />
      <Contacts />
      <About />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
