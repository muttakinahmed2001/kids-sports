import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

 

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)

    if(loading){
        return <div><progress className="progress progress-warning w-56" value="40" max="100"></progress></div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
    
};

export default PrivateRoute;