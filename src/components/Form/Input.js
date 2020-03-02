import React from "react";

const Input = ({ value, handleInput }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={handleInput}
      className="form__input input"
    />
  );
};

export default Input;
