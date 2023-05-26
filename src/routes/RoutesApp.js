import React from "react";

import { Route, Routes } from "react-router-dom";

import dataRoutes from "./index";

import Login from "../pages/Login";

const RoutesApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        {dataRoutes.map((item, index) => (
          <Route key={index} path={item.path} element={item.element}></Route>
        ))}
      </Routes>
    </div>
  );
};

export default RoutesApp;
