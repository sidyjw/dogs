import { Link } from "react-router-dom";
import * as GS from "styles";
import * as S from "./style";
import { ReactComponent as Dogs } from "assets/dogs.svg";
function Header() {
  return (
    <S.Header>
      <GS.Container>
        <S.Nav>
          <Link to="/" aria-label="Dogs - Home">
            <S.Logo>
              <Dogs />
            </S.Logo>
          </Link>
          <Link to="/login">
            <S.Login>Login / Criar</S.Login>
          </Link>
        </S.Nav>
      </GS.Container>
    </S.Header>
  );
}

export default Header;
