import React from "react";
import "./Input.scss";

const Input = ({ value, handleInput }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={handleInput}
      className="form__input input"
      placeholder="write meal name"
    />
  );
};

export default Input;
