import "./css/style.css";
import Main from "./pages/Main";
import Foryourpleasure from "./pages/Foryourpleasure";
import Ourcoffee from "./pages/Ourcoffee";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "/", element: <Main></Main> },
        { path: "/OurCoffee", element: <Ourcoffee></Ourcoffee> },
        { path: "/ForYouP", element: <Foryourpleasure></Foryourpleasure> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
