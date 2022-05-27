export const RegChecker = () => {
  let errorText: any = document.getElementById("errorText");
  let inputError: any = document.getElementById("emailInput");
  let containerError: any = document.getElementById("containerForm");
  let emailInput = (document.getElementById("emailInput") as any);
  let passwordInput = (document.getElementById("passwordInput") as any).value;
  let passwordContainer: any = document.getElementById("passwordContainer");

  let input = emailInput.value.split("@");
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
    if (passwordInput.length < 6) {
      passwordContainer.classList.add("form__container_error");
      console.log("братка пароль ошибся ");
      errorText.classList.remove("form_errorText");
      errorText.textContent = "Password must be at least 6 charcters";
    } else {
      passwordContainer.classList.remove("form__container_error");
    }
  }
};
