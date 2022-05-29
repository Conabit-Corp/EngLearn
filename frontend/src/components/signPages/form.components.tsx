import React from "react";
import "./form.components.scss";
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from "../../hook/useAuth";
import { PasswordInput } from "./passwordInput.components";
import { MailInput } from "./mailInput.components";
import { ButtonAuth } from "./buttonAuth.components";
import { SocialBtns } from "./socialBtns.components";
import { LoginChecker, RegChecker } from "../../utils/export.utils";
import { FormError } from "./formError.components";

export const SignForm = ({ page, title, buttonContent }: { page: string, title: string, buttonContent: string }): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn }: any = useAuth();

  const fromPage = (location.state as { from: { pathname: string } })?.from.pathname || '/';

  return (
    <div className="form">
      <h1 className="form__title">{title}</h1>
      <MailInput />
      <PasswordInput page={page} placeholder={'Password'} id={'passwordInput'} />
      {page !== 'logIn' ?
        <PasswordInput page={page} placeholder={'Repeat password'} id={'repeatPasswordInput'} />
        :
        null
      }
      <FormError />
      <ButtonAuth
        onClick={
          page === 'logIn' ?
            () => LoginChecker({ signIn, navigate, fromPage })
            :
            () => RegChecker({ navigate, fromPage })
        }
        textContent={buttonContent}
      />
      <div className="form__or">
        <div className="form__hr" />
        <span>or</span>
        <div className="form__hr" />
      </div>
      <SocialBtns />
      <div className="form__signUpContainer">
        <NavLink
          className="form__signUp"
          to={page === 'logIn' ? '/registration' : '/login'}
        >
          {page === 'logIn' ? 'Sign up' : 'Sign in'}
        </NavLink>
      </div>
    </div>
  );
};
