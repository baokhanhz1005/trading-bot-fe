import styled from "styled-components";
import bgLogin from "../../../asset/bg-login.jpg";
import logoLogin from "../../../asset/logo/profile-picture.png";
import subLoginBG from "../../../asset/bot-trade-banner.png";
import exp from "constants";
export const LoginModule = styled.div`
  width: 100%;
  height: 100%;
`;

export const LoginWrapper = styled.div`
  background: url(${bgLogin}) center center / cover repeat;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`;

export const LoginForm = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  height: 500px;
  background-color: #474141a6;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 0px;
  position: relative;
`;

export const Wrapper = styled.div`
  flex: 1;
`;

export const LogoLogin = styled.img.attrs((props) => ({
  src: logoLogin,
}))`
  background-color: #0000007a;
  height: 80px;
  border-radius: 50%;
`;

export const SubBanner = styled.img.attrs((props) => ({
  src: subLoginBG,
}))`
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 15px 0 0 15px;
  opacity: 0.85;
`;

export const WrapperContent = styled.div`
  width: 40%;
  // padding: 100px 0;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 80%;
`;

export const Text = styled.span`
  color: #ff9800;
  // text-shadow: 18px -11px 6px rgb(0 0 0 / 79%);
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  font-family: cursive;
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 36px;
  font-weight: bold;
  // text-transform: uppercase;
`;
