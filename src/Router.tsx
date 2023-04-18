import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import OutletContainer from 'components/OutletContainer/OutletContainer';
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
      <Route element={<OutletContainer />}>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/direct" element={<Direct />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
