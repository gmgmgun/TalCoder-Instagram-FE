import styled from 'styled-components';

export const SignUp = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 50px;
  z-index: 100;
`;

export const SignUpWrap = styled.div`
  max-width: 350px;
  width: 100%;
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  font-size: 45px;
  font-family: 'Lobster', cursive;
`;

export const Text = styled.p`
  margin: 40px 0;
  font-size: 0.9rem;
  color: #8e8e8e;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 260px;
  height: 40px;
  padding: 10px;
  border: 1px solid #dbdbdb;
  margin-bottom: 1rem;
  font-size: 13px;
  background-color: rgb(250, 250, 250);
  border: 1px solid rgb(227, 227, 227);
  border-radius: 5px;
`;
export const ButtonSubmit = styled.button`
  width: 260px;
  height: 40px;
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

export const GoToSignInWrap = styled(SignUpWrap)`
  margin-top: 1rem;
  justify-content: center;
  flex-direction: row;
`;

export const TextGoToSignIn = styled.p`
  font-size: 1rem;
`;

export const ButtonGoToSignIn = styled.button`
  background-color: transparent;
  color: #0095f6;
  border: none;
  font-size: 1.2rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;
