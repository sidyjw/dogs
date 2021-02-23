import styled, { css } from "styled-components";

interface NavProps {
  mobileMenuActive: boolean;
  mobile: boolean;
}

export const Nav = styled.nav<NavProps>`
  ${(props) =>
    props.mobile
      ? css`
          display: block;
          position: absolute;
          top: 70px;
          right: 0px;
          padding: 0 1rem;
          background: white;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
          border-radius: 0.2rem;
          transform: translateX(-10px);
          opacity: 0;
          pointer-events: none;
        `
      : css`
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        `}

  ${(props) =>
    props.mobileMenuActive &&
    css`
      transition: 0.3s;
      transform: initial;
      opacity: 1;
      pointer-events: initial;
      z-index: 100;
    `}

  & a,
  & button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
    ${(props) =>
      props.mobile &&
      css`
        display: flex;
        align-items: center;
        background: none;
        width: 100%;
        border: none;
        border-bottom: 1px solid #eee;
        padding: 0.5rem 0;
        cursor: pointer;
      `}
  }

  & a {
    margin-right: ${(props) => !props.mobile && "1rem"};
  }

  & a:hover,
  & a:focus,
  & button:hover,
  & button:focus {
    ${(props) =>
      !props.mobile &&
      css`
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
        outline: none;
      `}
  }

  & a.active {
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
  }

  & a.active svg > * {
    fill: #fb1;
  }

  //Estilos para o menu mobile
  & a:hover svg > *,
  & button:hover svg > * {
    fill: ${(props) => props.mobile && "#fb1"};
  }

  & button {
    border-bottom: ${(props) => props.mobile && "none"};
  }

  & svg {
    margin-right: ${(props) => props.mobile && "0.5rem"};
  }
`;

interface MobileMenuProps {
  active: boolean;
}

export const MobileMenu = styled.button<MobileMenuProps>`
  background: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  outline: ${(props) => props.active && "none"};
  background: ${(props) => props.active && "white"};
  box-shadow: ${(props) => props.active && "0 0 0 3px #fea"};
  border-color: ${(props) => props.active && "#fb1"};
  color: ${(props) => props.active && "#fb1"};

  &:after {
    content: " ";
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background-color: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;

    transform: ${(props) => props.active && "rotate(90deg)"};
    width: ${(props) => props.active && "4px"};
    height: ${(props) => props.active && "4px"};
    box-shadow: ${(props) =>
      props.active && "0 8px currentColor, 0 -8px currentColor"};
  }

  &:focus,
  &:hover {
    outline: none;
    background-color: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }
`;

export const NavMobile = styled.nav<MobileMenuProps>`
  display: block;
  position: absolute;
  top: 70px;
  right: 0px;
  padding: 0 1rem;
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  transform: translateX(-10px);
  opacity: 0;
  pointer-events: none;

  transition: ${(props) => props.active && "0.3s"};
  transform: ${(props) => props.active && "initial"};
  opacity: ${(props) => props.active && "1"};
  pointer-events: ${(props) => props.active && "initial"};
  z-index: ${(props) => props.active && "100"};

  & a,
  & button {
    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding: 0.5rem 0;
    cursor: pointer;
  }

  & a:hover svg > *,
  & button:hover svg > * {
    fill: #fb1;
  }

  & button {
    border-bottom: none;
  }

  & svg {
    margin-right: 0.5rem;
  }
`;
