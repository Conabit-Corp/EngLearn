import React from "react";
import "../loginPage/form.components.scss";
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { PasswordInput } from "./passwordInput.components";
import { MailInput } from "./mailInput.components";
import { ButtonAuth } from "./buttonAuth.components";
import { SocialBtns } from "./socialBtns.components";
import { RegChecker } from "../../utils/regPage/regChecker.utils";
import { FormError } from "./formError.components";

export const RegForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = (location.state as { from: { pathname: string } })?.from.pathname || '/';

  return (
    <div className="form">
      <h1 className="form__title">Create Account</h1>
      <MailInput />
      <PasswordInput />
      <FormError />
      <ButtonAuth onClick={() => RegChecker({ navigate, fromPage })} textContent="Sign up" />
      <div className="form__or">
        {/* <hr
          className="form__hr"
          align="center"
          width="100%"
          size="1"
          color="#dddddd"
        /> */}
        <span>or</span>
        {/* <hr
          className="form__hr"
          align="center"
          width="100%"
          size="1"
          color="#dddddd"
        /> */}
      </div>
      <SocialBtns />
      <div className="form__signUpContainer">
        <NavLink className="form__signUp" to={'/login'}>Sign in</NavLink>
      </div>
    </div>
  );
};
