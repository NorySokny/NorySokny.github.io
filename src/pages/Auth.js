import { Outlet } from "react-router-dom";
import '../assets/css/auth.css'
const Auth = () => {
    return (<>
        <div className="main">
            <Outlet/>
        </div>
    </>)
}


export default Auth;