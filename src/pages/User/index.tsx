import Feed from "containers/Feed";
import UserHeader from "containers/UserHeader";
import UserPhotoPost from "containers/UserPhotoPost";
import UserStats from "containers/UserStats";
import React, { useContext } from "react";
import { Routes, Route } from "react-router";
import { UserContext } from "state/UserContext";
import * as S from "./styles";
function User() {
  const context = useContext(UserContext);
  return (
    <S.UserPage>
      <UserHeader />
      <Routes>
        <Route
          path="/"
          element={context?.data && <Feed user={context?.data.id} />}
        />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </S.UserPage>
  );
}

export default User;
