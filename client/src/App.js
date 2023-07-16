import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Main } from "./containers";

const App = () => {
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/checkout-success" element={<CheckOutSuccess />} />
          <Route path="/user-orders" element={<UsersOrder />} /> */}
      </Routes>
    </div>
  );
};

export default App;
