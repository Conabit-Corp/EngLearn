import React from "react";
import "./buttonAuth.components.scss";

export const ButtonAuth = ({ onClick, textContent }: any) => {
  return <a id="loginBtn" onClick={onClick} className="form__button">{textContent}</a>;
};
