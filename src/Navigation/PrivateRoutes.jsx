import React, { useEffect,useState } from "react";
import {
  NavLink,
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
} from "react-router-dom";

export default function PrivateRoot(props) {
  const { isLogin } = props;
  const [shouldRedirect, setShouldRedirect] = useState(false);


  useEffect(() => {
    if (isLogin) {
      setShouldRedirect(false);
    } else {
      setShouldRedirect(true);
    }
  }, [isLogin]);

  return (
    <>
    {shouldRedirect?  <Navigate to='/authentication'> : <Outlet /> }
     
    </>
  );
}
