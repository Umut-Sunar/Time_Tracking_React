import React from "react";
import {
              NavLink,
              Navigate,
              Route,
              Routes,
              BrowserRouter as Router,
              Outlet,
            } from "react-router-dom";


export default function PrivateRoot(props) {

              const {isLogin} = props

              return (
                            <>
                              {isLogin ? (
                                <Outlet/>
                              ) : (
                                <Navigate to='/authentication'/>
                              )}
                            </>
                          );
}
