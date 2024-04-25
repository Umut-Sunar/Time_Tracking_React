import React, { useEffect, useState } from "react";
import {
  NavLink,
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
  useNavigate,
} from "react-router-dom";

export default function PrivateRoot(props) {
  const { isLogin } = props;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/authentication");
    }
  }, [isLogin]);

  return (
    <>
      <Outlet />
    </>
  );
}
