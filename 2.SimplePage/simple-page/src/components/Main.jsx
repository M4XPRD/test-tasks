/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import video from '../assets/GradientWallpaper.mp4';
import routes from '../routes/routes.js';
import Welcome from './Welcome';

const Main = () => {
  // const [formActivated, setFormActivated] = useState(false);
  const [hintActivated, setHintActivated] = useState(false);
  // const [showHint, setShowHint] = useState(false);
  const loginRef = useRef();
  const passwordFocus = useRef();
  const submitFocus = useRef();

  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.focus();
    }
  });

  const handleKeyDown = (event, focus) => {
    if (event.key === 'ArrowDown' || event.key === 'Tab') {
      event.preventDefault();
      switch (focus) {
        case loginRef:
          passwordFocus.current.focus();
          break;
        case passwordFocus:
          submitFocus.current.focus();
          break;
        default:
          loginRef.current.focus();
          break;
      }
    }
  };

  return (
    <div className="main">
      <div className="overlay" />
      <video src={video} autoPlay loop muted controlsList="nodownload" />
      <div className="content">
        {/* {!formActivated && (
          <button
            type="button"
            className="welcome"
            onClick={() => setFormActivated(true)}
          >
            <h1>Welcome!</h1>
            <h3>Click on me 🌎</h3>
          </button>
        )} */}
        <Routes>
          <Route path={routes.welcome()} element={<Welcome />} />
        </Routes>
        {/* {formActivated && (
        <div className="form-container">
          <form>
            <div>
              <input
                className="form-input"
                ref={loginRef}
                onKeyDown={(e) => handleKeyDown(e, loginRef)}
                type="text"
                name="login"
                placeholder="Login"
                autoComplete="off"
                spellCheck="false"
                value={hintActivated ? 'developer21' : ''}
              />
            </div>
            <div>
              <input
                className="form-input"
                ref={passwordFocus}
                onKeyDown={(e) => handleKeyDown(e, passwordFocus)}
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                spellCheck="false"
                value={hintActivated ? 123456 : ''}
              />
            </div>
            <div className="form-submit">
              <input
                className="form-input"
                ref={submitFocus}
                onKeyDown={(e) => handleKeyDown(e, submitFocus)}
                type="submit"
                value="Enter"
              />
            </div>
          </form>
          <button
            className="hint"
            type="button"
            onClick={() => setHintActivated(true)}
          >
            { hintActivated ? "All's settled! You're ready to enter" : 'Need some help?'}
          </button>
        </div>
        )} */}
      </div>
    </div>
  );
};

export default Main;
