import styled from "styled-components";
import avatar from "asset/avatar/avatar-2.jpg";
import logo from "asset/favi/icon-sidebar.png";

export const SidebarContainer = styled.div`
  width: 18%;
  height: 100%;
  background-color: #181745;
  transition: width 500ms ease;
  box-shadow: 1px 0px 10px 0 #000;

  &.close {
    width: 50px;
  }
`;

export const Avatar = styled.img.attrs((props) => ({
  src: avatar,
}))`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const HeadingAccount = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: #ff9800;
`;

export const IconLogo = styled.img.attrs((props) => ({
  src: logo,
}))`
  height: 25px;
  width: 25px;
`;

export const HeaderSideBar = styled.div`
  display: flex;
  background-color: #000026;
  width: 100%;
  align-items: center;
  padding: 10px 20px;
`;

export const WrapperChannel = styled.div``
export const ModuleContain = styled.div`
  padding: 15px 20px;
  align-items: center;
  transition: all ease 500ms;
  &:hover {
    cursor: pointer;
    background-color: #472f9082;
  }

  &.active {
    background-color: #04020682 !important;
  }
`