import {useLoginMutation} from "../../state/authApiSlice.js";
import {useDispatch} from "react-redux";
import {login} from "../../state/authSlice.js";
import {Navigate} from "react-router-dom";

export default function Login() {
    const [apiLogin, {isSuccess}] = useLoginMutation();

    if (isSuccess) {
        return <Navigate to="/" />;
    }

    const dispatch = useDispatch();

    return <button onClick={() => {
        apiLogin({
            body: {
                "email": "user1@grafilogika.hu",
                "password": "user1"
            }
        })
        //     .unwrap().then(response => {
        //     dispatch(login(response))
        // })
    }}>Login</button>
}
