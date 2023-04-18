import styled from 'styled-components';

export const SignUp = styled.div`
  width: 100%;
  // height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  margin-top: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  color: #8e8e8e;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #dbdbdb;
  margin-bottom: 1rem;
  font-size: 1rem;
`;
export const ButtonSubmit = styled.button`
  background-color: #0095f6;
  color: #ffffff;
  border: none;
  padding: 10px;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const GoToSignInWrap = styled(SignUpWrap)`
  margin-top: 1rem;
  flex-direction: row;
`;

export const TextGoToSignIn = styled.p`
  font-size: 1.3rem;
`;

export const ButtonGoToSignIn = styled.button`
  background-color: transparent;
  color: #0095f6;
  border: none;
  font-size: 1.3rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;
