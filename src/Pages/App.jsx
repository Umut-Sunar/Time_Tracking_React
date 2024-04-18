import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import AuthPage from "./AuthPage";
import PrivateRoot from "../Navigation/PrivateRoutes";


import usersData from "../../Data/userData";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  NavLink,
} from "react-router-dom";

import MainContentArea from "./MainContentArea";
import Dashboard from "./Dashboard";
import Reports from "./Reports";
import MainPage from "./MainPage";
import ErrorPage from "./NotFoundPage";
import api_path from "../../Backend/Api_path";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setSignup] = useState(false);
  const [activeBg, setActiveBg] = useState("white");
  const [userData, setUserData] = useState(usersData);

useEffect( () => {

axios.get(`${api_path}/`, {withCredentials:true}).then( response => {
  setIsLogin(response.data.login)
console.log(isLogin)
}).catch(err=> console.log('Cookies sorgusunda hata oluştu'))



} , [] )


  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoot isLogin={isLogin} />}>
        <Route index element={<Navigate replace to="app" />} />
          <Route path="app" element={<MainContentArea  isLogin={isLogin} activeBg={activeBg} setActiveBg={setActiveBg} userData={userData}  />}>
            <Route path="mainpage" element={<MainPage activeBg={activeBg} userData={userData} />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Route>

        <Route path="/authentication" element={<AuthPage isLogin={isLogin} isSignup={isSignup} setIsLogin={setIsLogin} setSignup={setSignup} />}>
    
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
