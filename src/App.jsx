import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Language from "./pages/Language/Language";
import Loginpage from "./pages/loginpage/Loginpage";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./component/translation/Translatelan";
import Notification from "./component/Notification/Index";
import Explore from "./component/Export/Index";
import Right from "./component/main_right/Right";
import Middle from "./component/main_middle/Middle";
import Theme from "./component/Theme/Index";
import Setting from "./component/Setting/Index";
import Analytics from "./component/Analytics/Index";
import Messages from "./component/Messages/Index";
import User from "./component/User/Index";
import UserProfile from "./component/UserProfile/Index";
import Api from "./pages/RestApi/Api";
import SignUp from "./pages/SignUp";
import Auth from "./component/Auth";
import { UserContextProvider } from "./context/userContext";

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Language />} /> */}
          <Route path="loginpage" element={<Loginpage />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Right />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/Messages/*" element={<Messages />}>
              <Route path=":user" element={<User />} />
            </Route>
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/Theme" element={<Theme />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
