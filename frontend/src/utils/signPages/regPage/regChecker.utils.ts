import { signUp } from "../../../apiGRPC/authService";

export const RegChecker = ({ navigate, fromPage }: any) => {
  let errorText: any = document.getElementById("errorText");
  let inputError: any = document.getElementById("emailInput");
  let containerError: any = document.getElementById("containerForm");
  let email = (document.getElementById("emailInput") as any).value;
  let password = (document.getElementById("passwordInput") as any).value;
  let repeatPassword = (document.getElementById('repeatPasswordInput') as any).value;
  let passwordContainer: any = document.getElementById("passwordContainer");

  let emailSplit = email.split("@");
  for (let el of emailSplit) {
    if (el == "") {
      console.log("Братка у тебя не введено мыло");
      errorText.classList.remove("form_errorText");
      inputError.classList.add("form__mail_error");
      containerError.classList.add("form__container_error");
      break;
    } else if (emailSplit.length !== 2) {
      console.log("Братка у тебя не введено мыло");
      errorText.classList.remove("form_errorText");
      errorText.textContent = "Invalid mail adress format";
      inputError.classList.add("form__mail_error");
      containerError.classList.add("form__container_error");
      break;
    } else {
      errorText.classList.add("form_errorText");
      errorText.textContent = "Invalid mail address format";
      inputError.classList.remove("form__mail_error");
      containerError.classList.remove("form__container_error");
      passwordChecker();
      break;
    }
  }
  function passwordChecker() {
    if (password.length < 6) {
      passwordContainer.classList.add("form__container_error");
      console.log("братка пароль ошибся ");
      errorText.classList.remove("form_errorText");
      errorText.textContent = "Password must be at least 6 charcters";
    } else {
      console.log('OK');
      passwordContainer.classList.remove("form__container_error");
      signUp(email, password, repeatPassword, () => navigate(fromPage, { replace: true }))
    }
  }
};
