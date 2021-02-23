import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "state/UserContext";
import { ReactComponent as MinhasFotos } from "assets/feed.svg";
import { ReactComponent as Estatisticas } from "assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "assets/adicionar.svg";
import { ReactComponent as Sair } from "assets/sair.svg";
import * as S from "./styles";
import useMedia from "hooks/useMedia";

function UserHeaderNav() {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);
  const context = useContext(UserContext);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <S.MobileMenu
          active={mobileMenu}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}

      <S.Nav mobileMenuActive={mobileMenu} mobile={mobile}>
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
    </>
  );
}

export default UserHeaderNav;
