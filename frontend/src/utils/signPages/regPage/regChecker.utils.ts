import { NavigateFunction } from "react-router-dom";
import { emitKeypressEvents } from "readline";
import { signUp } from "../../../apiGRPC/authService";

interface Props {
  navigate: NavigateFunction,
  fromPage: string,
}

export const RegChecker = (props: Props) => {
  let errorText: HTMLElement = document.getElementById("errorText")!;
  let containerError: HTMLElement = document.getElementById("containerForm")!;
  let emailInput = (document.getElementById("emailInput") as HTMLInputElement);
  let passwordInput = (document.getElementById("passwordInput") as HTMLInputElement);
  let repeatPasswordInput = (document.getElementById('repeatPasswordInput') as HTMLInputElement);
  let passwordContainer: NodeListOf<Element> = document.querySelectorAll(".form__containerPassword")!;

  let emailSplit = emailInput.value.split("@");
  for (let el of emailSplit) {
    if (el == "") {
      errorText.classList.remove("form_errorText");
      emailInput.classList.add("form__mail_error");
      containerError.classList.add("form__container_error");
      break;
    } else if (emailSplit.length !== 2) {
      errorText.classList.remove("form_errorText");
      errorText.textContent = "Invalid mail adress format";
      emailInput.classList.add("form__mail_error");
      containerError.classList.add("form__container_error");
      break;
    } else {
      errorText.classList.add("form_errorText");
      errorText.textContent = "Invalid mail address format";
      emailInput.classList.remove("form__mail_error");
      containerError.classList.remove("form__container_error");
      passwordChecker();
      break;
    };
  };

  function passwordChecker() {
    if (passwordInput.value.length < 6) {
      passwordContainer.forEach((el)=>{
        el.classList.add("form__container_error");
      })
      errorText.classList.remove("form_errorText");
      errorText.textContent = "Password must be at least 6 charcters";
    }
    else if (passwordInput.value.length !== repeatPasswordInput.value.length){
      passwordContainer.forEach((el)=>{
        el.classList.add("form__container_error");
      })
      errorText.classList.remove("form_errorText");
      errorText.textContent = "Passwords don't match";
    }
    else {
      passwordContainer.forEach((el)=>{
        el.classList.remove("form__container_error");
      })
      signUp(
        emailInput.value,
        passwordInput.value,
        repeatPasswordInput.value,
        () => props.navigate(props.fromPage, { replace: true })
      )
    };
  };
};
