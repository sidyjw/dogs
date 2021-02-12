import Feed from "containers/Feed";
import UserHeader from "containers/UserHeader";
import UserPhotoPost from "containers/UserPhotoPost";
import UserStats from "containers/UserStats";
import React from "react";
import { Routes, Route } from "react-router";
import * as S from "./styles";
function User() {
  return (
    <S.UserPage>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </S.UserPage>
  );
}

export default User;
