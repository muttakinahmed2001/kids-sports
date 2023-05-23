import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

 

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location = useLocation();
    console.log(location)

    if(loading){
        return <div><progress className="progress progress-warning w-56" value="40" max="100"></progress></div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:  location} }replace></Navigate>
    
};

export default PrivateRoute;