import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "state/UserContext";
import { ReactComponent as MinhasFotos } from "assets/feed.svg";
import { ReactComponent as Estatisticas } from "assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "assets/adicionar.svg";
import { ReactComponent as Sair } from "assets/sair.svg";
import * as S from "./styles";

function UserHeaderNav() {
  const [mobile, setMobile] = useState<boolean | null>(null);

  const context = useContext(UserContext);
  return (
    <S.Nav>
      <NavLink to="/conta" end>
        <MinhasFotos />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarFoto />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={context?.userLogout}>
        <Sair />
        {mobile && "Sair"}
      </button>
    </S.Nav>
  );
}

export default UserHeaderNav;
