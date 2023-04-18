import React, { useState } from 'react';
import * as S from './SignUpStyle';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState<Record<string, string>>({});

  const navigate = useNavigate();

  const onChangeUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const goToSignIn = () => {
    navigate('/signin');
  };

  return (
    <S.SignUp>
      <S.SignUpWrap>
        <S.Title>Instagram</S.Title>
        <S.Text>친구들의 사진과 동영상을 보려면 가입하세요.</S.Text>
        <S.SignUpForm onSubmit={onSubmitForm}>
          {signUpInfo.map(({ id, name, type, placeholder }) => (
            <S.Input
              key={id}
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={onChangeUserInfo}
            />
          ))}
          <S.ButtonSubmit type="submit">가입</S.ButtonSubmit>
        </S.SignUpForm>
      </S.SignUpWrap>
      <S.GoToSignInWrap>
        <S.TextGoToSignIn>계정이 있으신가요?</S.TextGoToSignIn>
        <S.ButtonGoToSignIn onClick={goToSignIn}>로그인</S.ButtonGoToSignIn>
      </S.GoToSignInWrap>
    </S.SignUp>
  );
};

export default SignUp;

const signUpInfo = [
  { id: 1, name: 'email', type: 'email', placeholder: '이메일 주소' },
  { id: 2, name: 'name', type: 'text', placeholder: '성명' },
  { id: 3, name: 'nickname', type: 'text', placeholder: '사용자 이름' },
  {
    id: 4,
    name: 'password',
    type: 'password',
    placeholder: '비밀번호(8자 이상)',
  },
  {
    id: 5,
    name: 'passwordCheck',
    type: 'password',
    placeholder: '비밀번호 확인',
  },
];
