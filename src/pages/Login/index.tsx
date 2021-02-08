import LoginCreate from "containers/LoginCreate";
import LoginForm from "containers/LoginForm";
import LoginPasswordLost from "containers/LoginPasswordLost";
import LoginPasswordReset from "containers/LoginPasswordReset";
import React from "react";
import { Route, Routes } from "react-router-dom";

function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
