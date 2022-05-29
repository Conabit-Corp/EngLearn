import "./formError.components.scss";

export const FormError = (): JSX.Element => {
  return (
    <div className="form__error">
      <a
        id="errorText"
        className="form_errorText"
      >
        Invalid email address format
      </a>
    </div>
  );
};
