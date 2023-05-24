import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';

const LoginPage = () => {
  const [inputValues, setInputValues] = useState({ login: '', password: '' });
  const loginRef = useRef();
  const passwordFocus = useRef();
  const submitFocus = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.focus();
    }
  }, []);

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
        case submitFocus:
          loginRef.current.focus();
          break;
        default:
          break;
      }
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { login, password } = inputValues;
    if (login === 'developer21' && password === '123456') {
      navigate(routes.profile());
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form-input"
            ref={loginRef}
            onKeyDown={(e) => handleKeyDown(e, loginRef)}
            onChange={handleInput}
            type="text"
            name="login"
            placeholder="Login"
            autoComplete="off"
            spellCheck="false"
            value={inputValues.login}
          />
        </div>
        <div>
          <input
            className="form-input"
            ref={passwordFocus}
            onKeyDown={(e) => handleKeyDown(e, passwordFocus)}
            onChange={handleInput}
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            spellCheck="false"
            value={inputValues.password}
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
        className="support-button"
        type="button"
      >
        {/* { hintActivated ? "All's settled! You're ready to enter" : 'Need some help?'} */}
      </button>
    </div>
  );
};

export default LoginPage;
