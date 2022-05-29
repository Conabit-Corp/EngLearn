import { NavigateFunction } from "react-router-dom";

interface Props {
  signIn: any,
  navigate: NavigateFunction,
  fromPage: string,
}

export const LoginChecker = (props: Props) => {
  let errorText: HTMLElement = document.getElementById("errorText")!;
  let containerError: HTMLElement = document.getElementById("containerForm")!;
  let emailInput = (document.getElementById("emailInput") as HTMLInputElement);
  let passwordInput = (document.getElementById("passwordInput") as HTMLInputElement).value;
  let passwordContainer: HTMLElement = document.getElementById("passwordContainer")!;

  let email = emailInput.value.split("@");
  for (let el of email) {
    if (el == "") {
      errorText.classList.remove("form_errorText");
      emailInput.classList.add("form__mail_error");
      containerError.classList.add("form__container_error");
      break;
    } else if (email.length !== 2) {
      errorText.classList.remove("form_errorText");
      errorText.textContent = "Invalid mail";
      emailInput.classList.add("form__mail_error");
      containerError.classList.add("form__container_error");
      break;
    } else {
      errorText.classList.add("form_errorText");
      errorText.textContent = "Invalid mail";
      emailInput.classList.remove("form__mail_error");
      containerError.classList.remove("form__container_error");
      passwordChecker();
      break;
    };
  };

  function passwordChecker() {
    if (passwordInput.length < 1) {
      passwordContainer.classList.add("form__container_error");
      errorText.classList.remove("form_errorText");
      errorText.textContent = "Invalid passowd";
    } else {
      passwordContainer.classList.remove("form__container_error");
      props.signIn(
        emailInput.value,
        passwordInput,
        () => props.navigate(props.fromPage, { replace: true })
      )
    };
  };
};
