import React from "react";
import "./form.components.scss";
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from "../../hook/useAuth";
import { PasswordInput } from "./passwordInput.components";
import { MailInput } from "./mailInput.components";
import { ButtonAuth } from "./buttonAuth.components";
import { SocialBtns } from "./socialBtns.components";
import { LoginChecker } from "../../utils/loginPage/loginChecker.utils";
import { FormError } from "./formError.components";

export const Form = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn }: any = useAuth();

  const fromPage = (location.state as { from: { pathname: string } })?.from.pathname || '/';

  return (
    <div className="form">
      <h1 className="form__title">Welcome to EngLearn</h1>
      <MailInput />
      <PasswordInput />
      <FormError />
      <ButtonAuth onClick={() => LoginChecker({ signIn, navigate, location, fromPage })} textContent="Log in" />
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
          align='center'
          width="100%"
          size="1"
          color="#dddddd"
        /> */}
      </div>
      <SocialBtns />
      <div className="form__signUpContainer">
        <NavLink className="form__signUp" to={'/registration'}>Sign up</NavLink>
      </div>
    </div>
  );
};
