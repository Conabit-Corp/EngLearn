import "./form.components.scss";
import { useLocation, useNavigate, NavLink, NavigateFunction, Location } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import { PasswordInput } from "./passwordInput.components";
import { MailInput } from "./mailInput.components";
import { ButtonAuth } from "./buttonAuth.components";
import { SocialBtns } from "./socialBtns.components";
import { LoginChecker, RegChecker } from "../../utils/export.utils";
import { FormError } from "./formError.components";

interface Props {
  page: string,
  title: string,
  buttonContent: string,
};

export const SignForm = (props: Props): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const location: Location = useLocation();
  const { signIn }: any = useAuth();

  const fromPage = (location.state as { from: { pathname: string } })?.from.pathname || "/";

  return (
    <div className="form">
      <h1 className="form__title">{props.title}</h1>
      <MailInput />
      <PasswordInput page={props.page} placeholder={"Password"} id={"passwordInput"} />
      {props.page !== "logIn" ?
        <PasswordInput page={props.page} placeholder={"Repeat password"} id={"repeatPasswordInput"} />
        :
        null
      }
      <FormError />
      <ButtonAuth
        onClick={
          props.page === "logIn" ?
            () => LoginChecker({ signIn, navigate, fromPage })
            :
            () => RegChecker({ navigate, fromPage })
        }
        textContent={props.buttonContent}
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
          to={props.page === "logIn" ? "/registration" : "/login"}
        >
          {props.page === "logIn" ? "Sign up" : "Sign in"}
        </NavLink>
      </div>
    </div>
  );
};
