import Footer from "containers/Footer";
import Header from "containers/Header";
import * as S from "styles";
import Home from "pages/Home";
import Login from "pages/Login";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "state/UserContext";

const App = () => {
  return (
    <div>
      <S.GlobalStyles />
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
