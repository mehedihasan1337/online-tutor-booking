import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loeding from "../components/Loeding";



const PrivateRoute = ({children}) => {
    const{user ,loading}= useContext(AuthContext)
    const location =useLocation()
    if(loading){
        return <Loeding></Loeding>
    }

    if(user && user?.email){
        return children
    }

    return (
       <Navigate to="/login" state={location?.pathname} ></Navigate>
    );
};

export default PrivateRoute;