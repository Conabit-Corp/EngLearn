export const LoginChecker = ({ signIn, navigate, fromPage }: any) => {
  let errorText: any = document.getElementById("errorText");
  let inputError: any = document.getElementById("emailInput");
  let containerError: any = document.getElementById("containerForm");
  let emailInput = (document.getElementById("emailInput") as any).value;
  let passwordInput = (document.getElementById("passwordInput") as any).value;
  let passwordContainer: any = document.getElementById("passwordContainer");

  let input = emailInput.split("@");
  for (let el of input) {
    if (el == "") {
      console.log("Братка у тебя не введено мыло");
      errorText.classList.remove("form_errorText");
      inputError.classList.add("form__mail_error");
      containerError.classList.add("form__container_error");
      break;
    } else if (input.length !== 2) {
      console.log("Братка у тебя не введено мыло");
      errorText.classList.remove("form_errorText");
      errorText.textContent = "Invalid mail";
      inputError.classList.add("form__mail_error");
      containerError.classList.add("form__container_error");
      break;
    } else {
      errorText.classList.add("form_errorText");
      errorText.textContent = "Invalid mail";
      inputError.classList.remove("form__mail_error");
      containerError.classList.remove("form__container_error");
      passwordChecker();
      break;
    }
  }
  function passwordChecker() {
    if (passwordInput.length < 1) {
      passwordContainer.classList.add("form__container_error");
      console.log("братка пароль ошибся ");
      errorText.classList.remove("form_errorText");
      errorText.textContent = "Invalid passowd";
    } else {
      passwordContainer.classList.remove("form__container_error");
      signIn(emailInput, passwordInput, () => navigate(fromPage, { replace: true }))
    }
  }
};
