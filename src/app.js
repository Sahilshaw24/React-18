import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routing in React :- is a process of defining different routes in our application and rendering different components based on the URL path. It allows us to create a single-page application (SPA) where the content changes dynamically without reloading the entire page.

// server-side routing:- In server-side routing, the server handles the routing logic. When a user requests a specific URL, the server processes the request and sends back the appropriate HTML page. This approach is traditional and is commonly used in multi-page applications (MPAs).

// client-side routing:- In client-side routing, the routing logic is handled on the client side using JavaScript. When a user clicks on a link or navigates to a specific URL, the client-side router intercepts the request and dynamically updates the content without reloading the entire page. This approach is commonly used in single-page applications (SPAs) built with frameworks like React.

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
