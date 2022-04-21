import { useState } from 'react';
import Cookies from 'universal-cookie';
import { LOG_IN_COOKIE_KEY } from '../constants';
// import styles from '../styles/Login.module.css';

interface LoginProps {
  redirectPath: string;
}

export const Login = ({ redirectPath }: LoginProps) => {
  const [password, setPassword] = useState('');

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form>
        <div>
          <label>
            <span>Password</span>
            <div>
              <input
                type="text"
                placeholder="Your site password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
          </label>
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const cookies = new Cookies();
            cookies.set(LOG_IN_COOKIE_KEY, password, {
              path: '/',
            });
            window.location.href = redirectPath ?? '/';
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};
