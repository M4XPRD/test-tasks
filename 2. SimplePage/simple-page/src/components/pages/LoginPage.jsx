import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import cn from 'classnames';
import routes from '../../routes/routes';

const LoginPage = () => {
  const [inputValues, setInputValues] = useState({ login: '', password: '' });
  const [inputErrors, setInputErrors] = useState({ login: false, password: false });
  const [showHelp, setShowHelp] = useState(false);
  const loginRef = useRef();
  const passwordFocus = useRef();
  const submitFocus = useRef();
  const helpFocus = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.focus();
    }
  }, []);

  const loginSchema = yup.object().shape({
    login: yup
      .string()
      .trim()
      .oneOf(['developer21'], 'LoginError')
      .required(),
    password: yup
      .string()
      .trim()
      .oneOf(['123456'], 'PasswordError')
      .required(),
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
        case submitFocus:
          helpFocus.current.focus();
          break;
        case helpFocus:
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
    try {
      loginSchema.validateSync(inputValues, { abortEarly: false });
      setInputErrors({ login: false, password: false });
      navigate(routes.profile());
    } catch (error) {
      switch (error.message) {
        case 'LoginError':
          setInputValues({ ...inputValues, login: '' });
          setInputErrors({ login: true, password: false });
          break;
        case 'PasswordError':
          setInputValues({ ...inputValues, password: '' });
          setInputErrors({ login: false, password: true });
          break;
        default:
          setInputValues({ ...inputValues, login: '', password: '' });
          setInputErrors({ login: true, password: true });
          break;
      }
    }
  };

  const loginInput = cn('form-input', 'input-focus', {
    'is-invalid': inputErrors.login,
  });

  const passwordInput = cn('form-input', 'input-focus', {
    'is-invalid': inputErrors.password,
  });

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className={loginInput}
            ref={loginRef}
            onKeyDown={(e) => handleKeyDown(e, loginRef)}
            onChange={handleInput}
            type="text"
            name="login"
            placeholder={inputErrors.login ? 'Incorrect Login' : 'Login'}
            autoComplete="off"
            spellCheck="false"
            value={inputValues.login}
          />
        </div>
        <div>
          <input
            className={passwordInput}
            ref={passwordFocus}
            onKeyDown={(e) => handleKeyDown(e, passwordFocus)}
            onChange={handleInput}
            type="password"
            name="password"
            placeholder={inputErrors.password ? 'Incorrect Password' : 'Password'}
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
        ref={helpFocus}
        type="button"
        onClick={() => setShowHelp(!showHelp)}
        onKeyDown={(e) => handleKeyDown(e, helpFocus)}
      >
        {showHelp ? 'developer21 : 123456' : 'Need some help?'}
      </button>
    </div>
  );
};

export default LoginPage;
