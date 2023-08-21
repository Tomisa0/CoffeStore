import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import Foryourpleasure from "./pages/Foryourpleasure";
import Ourcoffee from "./pages/Ourcoffee";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
    {
      path: "/For",
      element: <Foryourpleasure></Foryourpleasure>,
    },
    {
      path: "/Coffee",
      element: <Ourcoffee></Ourcoffee>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
