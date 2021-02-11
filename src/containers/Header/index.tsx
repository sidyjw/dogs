import { Link } from "react-router-dom";
import * as GS from "styles";
import * as S from "./style";
import { ReactComponent as Dogs } from "assets/dogs.svg";
import { UserContext } from "state/UserContext";
import { useContext } from "react";
function Header() {
  const context = useContext(UserContext);
  return (
    <S.Header>
      <GS.Container>
        <S.Nav>
          <Link to="/" aria-label="Dogs - Home">
            <S.Logo>
              <Dogs />
            </S.Logo>
          </Link>
          {context?.data ? (
            <Link to="/conta">
              <S.Login>{context.data.nome}</S.Login>
            </Link>
          ) : (
            <Link to="/login">
              <S.Login>Login / Criar</S.Login>
            </Link>
          )}
          <button onClick={context?.userLogout}>Sair</button>
        </S.Nav>
      </GS.Container>
    </S.Header>
  );
}

export default Header;
