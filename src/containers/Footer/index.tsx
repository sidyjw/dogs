import * as S from "./styles";
import { ReactComponent as Dogs } from "assets/dogs-footer.svg";
function Footer() {
  return (
    <S.Footer>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </S.Footer>
  );
}

export default Footer;
