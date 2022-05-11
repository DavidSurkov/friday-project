import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
        <li>
          <NavLink to="profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="registration">Registration</NavLink>
        </li>
        <li>
          <NavLink to="test">Test</NavLink>
        </li>
        <li>
          <NavLink to="reset_password">Reset password</NavLink>
        </li>
        <li>
          <NavLink to="set_new_password">Set new password</NavLink>
        </li>
        <li>
          <NavLink to="/">Not found</NavLink>
        </li>
      </ul>
    </nav>
  );
};
