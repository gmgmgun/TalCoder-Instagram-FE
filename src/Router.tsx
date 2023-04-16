import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Nav from 'components/Nav/Nav';
import Main from 'pages/Main/Main';
import SignUp from 'pages/SignUp/SignUp';
import SignIn from 'pages/SignIn/SignIn';
import Profile from 'pages/Profile/Profile';
import Direct from 'pages/Direct/Direct';

const Router = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Nav />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/direct" element={<Direct />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
