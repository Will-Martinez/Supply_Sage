import Table from "../Table";
import Home from "../Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "products",
    element: <Table />
  }
]);

export default function App() {
  return <RouterProvider router={router}/>
}
