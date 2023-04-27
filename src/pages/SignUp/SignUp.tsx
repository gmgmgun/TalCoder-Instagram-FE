import React, { useState } from 'react';
import * as S from './SignUpStyle';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';

interface UserInputList {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  nickname: string;
}

const SignUp = () => {
  const [userInfo, setUserInfo] = useState<UserInputList>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    nickname: '',
  });

  const { email, password, firstName, lastName, nickname } = userInfo;

  const navigate = useNavigate();

  const isValid = email && password && firstName && lastName && nickname;

  const onChangeUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`${BASE_URL}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        nickname: nickname,
      }),
    })
      .then(response => {
        if (response.status === 201) {
          navigate('/signin');
        } else {
          alert('이미 가입된 이메일입니다.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('에러가 발생했습니다. 다시 시도해주세요.');
      });
  };

  const goToSignIn = () => {
    navigate('/signin');
  };

  return (
    <S.SignUp>
      <S.SignUpWrap>
        <S.Heading>Instagram</S.Heading>
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
          <S.ButtonSubmit type="submit" disabled={!isValid}>
            {' '}
            가입
          </S.ButtonSubmit>
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
  {
    id: 2,
    name: 'password',
    type: 'password',
    placeholder: '비밀번호(8자 이상)',
  },
  {
    id: 3,
    name: 'passwordCheck',
    type: 'password',
    placeholder: '비밀번호 확인',
  },
  { id: 4, name: 'firstName', type: 'text', placeholder: '이름' },
  { id: 5, name: 'lastName', type: 'text', placeholder: '성' },
  { id: 6, name: 'nickname', type: 'text', placeholder: '별명' },
];
