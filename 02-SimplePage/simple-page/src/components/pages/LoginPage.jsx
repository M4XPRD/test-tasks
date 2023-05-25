import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import cn from 'classnames';
import routes from '../../routes/routes';

const LoginPage = () => {
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

  const f = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: loginSchema,
    validateOnChange: true,
    onSubmit: () => {
      navigate(routes.profile());
    },
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

  const loginInput = cn('form-input', 'input-focus', {
    'is-invalid': f.errors.login,
  });

  const passwordInput = cn('form-input', 'input-focus', {
    'is-invalid': f.errors.password,
  });

  return (
    <div className="form-container">
      <form onSubmit={f.handleSubmit}>
        <div>
          <input
            className={loginInput}
            ref={loginRef}
            onKeyDown={(e) => handleKeyDown(e, loginRef)}
            onChange={f.handleChange}
            type="text"
            name="login"
            placeholder={f.errors.login ? 'Incorrect Login' : 'Login'}
            autoComplete="off"
            spellCheck="false"
            value={f.values.login}
          />
        </div>
        <div>
          <input
            className={passwordInput}
            ref={passwordFocus}
            onKeyDown={(e) => handleKeyDown(e, passwordFocus)}
            onChange={f.handleChange}
            type="password"
            name="password"
            placeholder={f.errors.password ? 'Incorrect Password' : 'Password'}
            autoComplete="off"
            spellCheck="false"
            value={f.values.password}
          />
        </div>
        <div className="form-submit">
          <input
            className="form-input"
            disabled={f.errors.login || f.errors.password}
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
        {showHelp ? 'developer21 : 123456' : 'Get your login here!'}
      </button>
    </div>
  );
};

export default LoginPage;
