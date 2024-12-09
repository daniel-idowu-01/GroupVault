import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, SignUp } from "./pages";

const App = () => {
  return (
    <div className="montserrat-base">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
