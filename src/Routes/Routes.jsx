import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
 
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";
import ToyDetails from "../pages/ToyDetails";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

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
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path:'myToys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'/toys/:id',
        element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader:({params})=>fetch(` https://toy-server-snowy.vercel.app/toys/${params.id}`)

      },
      {
        path:'updateToys/:id',
        element:<UpdateToy></UpdateToy>,
        loader:({params})=> fetch(`https://toy-server-snowy.vercel.app/toys/${params.id}`)
      }
    ]
  },
  {
    path:'*',
    element:<Error></Error>
  }
]);

export default router;