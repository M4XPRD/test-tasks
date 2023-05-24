import React from 'react';
import { Routes, Route } from 'react-router-dom';
import video from '../assets/GradientWallpaper.mp4';
import routes from '../routes/routes.js';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';

const Main = () => (
  <div className="main">
    <div className="overlay" />
    <video src={video} autoPlay loop muted controlsList="nodownload" />
    <div className="content">
      <Routes>
        <Route path={routes.welcome()} element={<WelcomePage />} />
        <Route path={routes.login()} element={<LoginPage />} />
        <Route path={routes.profile()} element={<ProfilePage />} />
        <Route path={routes.error()} element={<ErrorPage />} />
      </Routes>
    </div>
  </div>
);
export default Main;
