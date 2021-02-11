import LoginCreate from "containers/LoginCreate";
import LoginForm from "containers/LoginForm";
import LoginPasswordLost from "containers/LoginPasswordLost";
import LoginPasswordReset from "containers/LoginPasswordReset";
import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "state/UserContext";
import * as S from "./styles";
function Login() {
  const context = useContext(UserContext);

  return (
    <S.FormWrapper>
      {context?.login ? (
        <Navigate to="/conta" />
      ) : (
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
        </Routes>
      )}
    </S.FormWrapper>
  );
}

export default Login;
