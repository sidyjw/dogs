import Footer from "containers/Footer";
import Header from "containers/Header";
import * as S from "styles";
import Home from "pages/Home";
import Login from "pages/Login";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "state/UserContext";
import User from "pages/User";
import ProtectedRoute from "components/ProtectedRoute";
import { Container } from "styles";
import Photo from "pages/Photo";
const App = () => {
  return (
    <div>
      <S.GlobalStyles />
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRoute path="conta/*" element={<User />} />
              <Route path="foto/:id" element={<Photo />} />
            </Routes>
            <Footer />
          </Container>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
