import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, SignUp, Home } from "./pages";

const App = () => {
  return (
    <div className="montserrat-base">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
