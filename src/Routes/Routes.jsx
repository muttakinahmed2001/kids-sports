import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
 
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToys from "../pages/AllToys/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>

      },
      {
        path:'signUp',
        element:<SignUp></SignUp>
      },
      {
        path: 'allToys',
        element: <AllToys></AllToys>
        
      },
      {
        path:'addAToy',
        element: <AddAToy></AddAToy>
      }
    ]
  },
]);

export default router;