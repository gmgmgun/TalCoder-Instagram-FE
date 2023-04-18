import styled from 'styled-components';

export const SignIn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 50px;
  z-index: 100;
`;

export const SignInWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 350px;
  height: 400px;
  background-color: white;
  border: 1.5px solid rgb(227, 227, 227);
`;

export const Heading = styled.h1`
  margin: 40px 0;
  font-size: 45px;
  font-family: 'Lobster', cursive;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 260px;
  height: 40px;
  padding: 10px;
  font-size: 13px;
  background-color: rgb(250, 250, 250);
  border: 1px solid rgb(227, 227, 227);
  border-radius: 5px;

  &:last-child {
    margin-top: 5px;
  }
`;

export const Button = styled.button`
  width: 260px;
  height: 30px;
  margin-top: 10px;
  color: white;
  background-color: rgb(0, 149, 246);
  border: 0;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

export const HrContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  margin-top: 17px;
  opacity: 0.6;
  font-size: 13px;
`;

export const Hr = styled.hr`
  width: 100px;
  height: 1px;
`;

export const FacebookButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-weight: 600;
  border: 0;
  background-color: transparent;
  color: #4167b2;
  font-family: Arial, Helvetica, sans-serif;
`;

export const FacebookIcon = styled.img`
  width: 16px;
  margin-right: 7px;
`;

export const ForgetPassword = styled.a`
  position: absolute;
  bottom: 20px;
  font-size: 12px;
  color: rgb(0, 38, 111);
  text-decoration: none;
`;

export const Join = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 60px;
  margin-top: 10px;
  font-size: 14px;
  background-color: white;
  border: 1.5px solid rgb(227, 227, 227);
  text-decoration: none;
`;

export const JoinButton = styled.button`
  border: 0;
  background-color: transparent;
  color: rgb(0, 149, 246);
  font-weight: 600;
`;

export const DownloadWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin: 20px 0;
    font-size: 14px;
  }

  button {
    border: 0;
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }

    img {
      width: 135px;
      height: 40px;
    }
  }
`;

export const Footer = styled.footer`
  width: 600px;
  margin-top: 40px;
`;

export const FooterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const FooterItem = styled.li`
  margin: 5px;
  font-size: 12px;
  opacity: 0.5;
`;
