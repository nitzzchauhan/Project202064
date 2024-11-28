import { Button } from "@/components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

const appRouter = createBrowserRouter([
  { 
    path: "/",
    element: <Home/>
  }, 
  { 
    path: "/about",
    element: <h1>Hello i am about</h1>
  }, 
]);

function App() {
  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
  );
}

export default App;
