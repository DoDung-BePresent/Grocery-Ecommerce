import { RouterProvider, createBrowserRouter } from "react-router-dom";

// components
import Layout from "./components/Layout/Layout";

// pages
import Home from "./pages/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
