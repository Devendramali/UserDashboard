import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import UserList from "../pages/UserList";

const Auth = ({search} ) => {
  return (
    <>
    <div className="mainbody">
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<UserList search={search} />} />

    </Routes>
    </div>
    </>
  );
};

export default Auth;