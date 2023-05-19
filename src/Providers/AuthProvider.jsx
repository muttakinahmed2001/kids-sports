import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password);

       
    }
    const authInfo = {
        user,
         loading,
         signUp
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;