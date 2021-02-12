import { Title } from "components/Title";
import UserHeaderNav from "./UserHeaderNav";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function UserHeader() {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);

  return (
    <S.Header>
      <Title>{title}</Title>
      <UserHeaderNav />
    </S.Header>
  );
}

export default UserHeader;
