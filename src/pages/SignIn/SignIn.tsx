import React, { useEffect, useState } from 'react';
import * as S from './SignInStyle';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';

interface UserInputList {
  email: string;
  password: string;
}

interface SignInResponse {
  firstName: string;
  lastName: string;
  nickname: string;
}

const SignIn = () => {
  const [input, setInput] = useState<UserInputList>({
    email: '',
    password: '',
  });

  const [userInfo, setUserInfo] = useState<SignInResponse>({
    firstName: '',
    lastName: '',
    nickname: '',
  });

  const { email, password } = input;

  const navigate = useNavigate();

  const emailRegEx = /.*@.*/;
  const pwRegEx = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const emailCheck = emailRegEx.test(email);
  const pwCheck = pwRegEx.test(password);

  const isValid = emailCheck && pwCheck;

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onClickBtnGoToSignUp = () => {
    navigate('/signup');
  };

  const onClickBtnLogin = () => {
    fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        const { JWT, firstName, lastName, nickname } = data;
        if (JWT) {
          localStorage.setItem('token', JWT);
          setUserInfo({ firstName, lastName, nickname });
          navigate('/');
        } else {
          alert('입력이 틀렸습니다');
        }
      });
  };

  const onClickBtnFacebook = () => {
    window.open(
      'https://www.facebook.com/dialog/oauth?client_id=124024574287414&redirect_uri=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F&state=%7B%22fbLoginKey%22%3A%221jpksqp1veyryd11yb2tw144wms313dh8i3wmio351omwr9112gyt3t%22%2C%22fbLoginReturnURL%22%3A%22%2Ffxcal%2Fdisclosure%2F%3Fnext%3D%252F%22%7D&scope=email&response_type=code%2Cgranted_scopes&locale=ko_KR'
    );
  };

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [userInfo]);

  return (
    <S.SignIn>
      <S.SignInWrap>
        <S.Heading>Instagram</S.Heading>
        <S.InputContainer>
          <S.Input
            name="email"
            type="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={onChangeInput}
          />
          <S.Input
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={onChangeInput}
          />
        </S.InputContainer>
        <S.Button onClick={onClickBtnLogin} disabled={!isValid}>
          로그인
        </S.Button>
        <S.HrContainer>
          <S.Hr />
          또는 <S.Hr />
        </S.HrContainer>
        <S.FacebookButton onClick={onClickBtnFacebook} className="facebookBtn">
          <span>
            <S.FacebookIcon alt="logo" src="/images/SignIn/facebook.png" />
          </span>
          <span>Facebook으로 로그인</span>
        </S.FacebookButton>
        <S.ForgetPassword
          className="forgetPassword"
          href="https://www.instagram.com/accounts/password/reset/"
        >
          비밀번호를 잊으셨나요?
        </S.ForgetPassword>
      </S.SignInWrap>
      <S.Join>
        <span>계정이 없으신가요?</span>
        <S.JoinButton onClick={onClickBtnGoToSignUp}>
          가입하러 가기
        </S.JoinButton>
      </S.Join>
      <S.DownloadWrap>
        <span>앱을 다운로드하세요.</span>
        <div className="imgCnt">
          <button>
            <a
              href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="applestore" src="/images/SignIn/applestore.png" />
            </a>
          </button>
          <button>
            <a
              href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D03D0028F-118C-4B50-A7A3-FEEF66D9C267%26utm_content%3Dlo%26utm_medium%3Dbadge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="googleplay" src="/images/SignIn/googleplay.png" />
            </a>
          </button>
        </div>
      </S.DownloadWrap>
      <S.Footer>
        <S.FooterList>
          {FOOTER_INFO_LIST.map(info => (
            <S.FooterItem key={info.id}>{info.text}</S.FooterItem>
          ))}
        </S.FooterList>
      </S.Footer>
    </S.SignIn>
  );
};

const FOOTER_INFO_LIST = [
  { id: 1, text: 'Meta' },
  { id: 2, text: '소개' },
  { id: 3, text: '블로그' },
  { id: 4, text: '채용 정보' },
  { id: 5, text: '도움말' },
  { id: 6, text: 'API' },
  { id: 7, text: '개인정보처리방침' },
  { id: 8, text: '약관' },
  { id: 9, text: '인기 계정' },
  { id: 10, text: '위치' },
  { id: 11, text: 'Instagram Lite' },
  { id: 12, text: '연락처 업로드 & 사용자' },
];

export default SignIn;
