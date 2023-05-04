import React from "react";
import Loginpage from "../pages/loginpage/Loginpage";
import Dashboard from "../pages/Dashboard/Dashboard";
import { useUserContext } from "../context/userContext";

const Auth = ()=>{
    const {user} = useUserContext()
    return <>{user.isGuestUser? <Loginpage/>: <Dashboard/>}</>;
}

export default Auth;