import React from "react";
import { useState, useEffect } from "react";

import AuthPage from "./AuthPage";
import PrivateRoot from "../Navigation/PrivateRoutes";
import NotFoundPage from "./NotFoundPage";

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

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignup, setSignup] = useState(false);
  const [activeBg, setActiveBg] = useState("white");
  const [userData, setUserData] = useState(usersData);



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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
