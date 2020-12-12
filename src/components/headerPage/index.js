import React from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated } from '../../utils/cookie';

const Header = () => {
  const listMenu = ['home', 'profile', 'contact', 'infoCorona'];
  const logout = () => {
    document.cookie = 'token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'userData= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    window.location.replace('/');
  };
  return (
    <div className="header">
      {listMenu.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">{name}</div>
          </Link>
        );
      })}
      {isUserAuthenticated() ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <div />
      )}
    </div>
  );
};
export default Header;
