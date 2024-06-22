import {useSelector} from "react-redux";
import {selectIsAuthenticated} from "./state/authSlice.js";
import {Navigate} from "react-router-dom";

export default function RequireAuth({children}) {
    const isAuthenticated = useSelector(selectIsAuthenticated);


    if (isAuthenticated) {
        return children;
    }

    return <Navigate to={`/login`}></Navigate>

}
