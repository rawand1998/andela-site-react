

import React, { lazy } from "react";
// import Home  from '../Pages/Home/Home'
// import Register from "../Pages/Auth/register/Register";
// import Login from "../Pages/Auth/Login/Login";
import Clients from "../Pages/Client/Clients";
const Register = lazy(() => import("../Pages/Auth/register/Register"));
const Login = lazy(() => import("../Pages/Auth/Login/Login"));
const About = lazy(() => import("../Pages/About/About"));
// const Clients = lazy(() => import("../Pages//ClientPage/Clients"));
const Enterprise = lazy(() =>
  import("../Pages/Enterprise/Enterprise")
);
const FindWork = lazy(() => import("../Pages/FindWork/FindWork"));
const Error = lazy(() => import("../Pages/Error"));
const Home =lazy(()=>import('../Pages/Home/Home'))

const Router = {
  routes: [
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "clients", element: <Clients /> },
    { path: "enterprise", element: <Enterprise /> },
    { path: "login", element: <Login />},
    { path: "register", element: <Register /> },
    { path: "findWork", element: <FindWork /> },
    { path: "*", element: <Error /> },
  ],
};

export default Router;