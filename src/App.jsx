import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Language from "./pages/Language/Language";
import Loginpage from "./pages/loginpage/Loginpage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Api from "./pages/RestApi/Api";
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
import Home from "./component/Home/Index";
import UserProfile from "./component/userProfile/Index";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Routes>
    <Route path="/" element={<Language/>} />
    <Route path="loginpage" element={<Loginpage />} />
    </Routes> */}
      <Routes>
        <Route path="/" element={<Api />} />
        {/* <Route path="/" element={<Dashboard />}>
          <Route index element={<Middle />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route index element={<UserProfile />} /> */}
        {/* <Route path="/Explore" element={<Explore />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Messages/*" element={<Messages />}>
            <Route path=":user" element={<User />} />
          </Route>
          <Route path="/Analytics" element={<Analytics />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Theme" element={<Theme />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
