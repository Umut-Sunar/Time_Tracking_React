import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import AuthPage from "./AuthPage";
import PrivateRoot from "../Navigation/PrivateRoutes";
import LoadingPage from "./Loading";

import usersData from "../../Data/userData";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  NavLink,
  useLocation,
} from "react-router-dom";

import MainContentArea from "./MainContentArea";
import Dashboard from "./Dashboard";
import Reports from "./Reports";
import MainPage from "./MainPage";
import ErrorPage from "./NotFoundPage";


import api_path from "../../Backend/Api_path";

export default function App() {
  const [isLogin, setIsLogin] = useState();
  const [isSignup, setSignup] = useState(false);
  const [activeBg, setActiveBg] = useState("white");
  const [userData, setUserData] = useState();

const [loading,setLoading] = useState(true)
const location = useLocation();

function handleLoading(){

setLoading(false)

}

  useEffect(() => {
   
    axios
      .get(`${api_path}/start`, { withCredentials: true })
      .then((response) => {
        setIsLogin(response.data.login);
        const userInformation = response.data.userInformation;
        setUserData(userInformation);
        handleLoading()
        // console.log(userInformation)
      })
      .catch((err) => {
        setIsLogin(false);
        console.log("Start Sorgusunda : Cookies sorgusunda hata oluştu");
      });
      return () => window.removeEventListener('load', handleLoading);
  }, [location.pathname]);

  function logout() {
    axios
      .get(`${api_path}/logout`, { withCredentials: true })
      .then((response) => {
        setIsLogin(response.data.login);
      })
      .catch((err) => console.log("Logout esnasında sorun oldu"));
  }

  function changeLoginStatu(statu) {
    setIsLogin(statu);
  }

  return (
    <>
   {loading && loading ?  <LoadingPage/> : <Routes>
      
      <Route
        path="/"
        element={<PrivateRoot key={isLogin} isLogin={isLogin} />}
      >
        <Route index element={<Navigate replace to="app/mainpage" />} />
        <Route
          path="app"
          element={
            <MainContentArea
              logout={logout}
              isLogin={isLogin}
              activeBg={activeBg}
              setActiveBg={setActiveBg}
              userData={userData}
            />
          }
        >
          <Route
            path="mainpage"
            element={<MainPage activeBg={activeBg} userData={userData} />}
          />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Route>

      <Route
        path="/authentication"
        element={
          <AuthPage
            setUserData={setUserData}
            isLogin={isLogin}
            isSignup={isSignup}
            changeLoginStatu={changeLoginStatu}
            setSignup={setSignup}
          />
        }
      ></Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>}
      
    </>
  );
}
