import styled from "styled-components";

export const Logo = styled.div`
  padding: 0.5rem 0;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const Header = styled.header`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: white;
  top: 0;
`;

export const Login = styled.div`
  color: #333;
  display: flex;
  align-items: center;
  &::after {
    content: " ";
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url("/usuario.svg") no-repeat center center;
    margin-left: 0.5rem;
    position: relative;
    top: -1px;
  }
`;
