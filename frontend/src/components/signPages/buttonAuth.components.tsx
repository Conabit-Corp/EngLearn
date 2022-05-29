import React from "react";
import "./buttonAuth.components.scss";

export const ButtonAuth = (
  { onClick, textContent }:
    { onClick: React.MouseEventHandler<HTMLAnchorElement>, textContent: string }) => {
  return (
    <a
      id="loginBtn"
      onClick={onClick}
      className="form__button"
    >
      {textContent}
    </a>
  );
};
