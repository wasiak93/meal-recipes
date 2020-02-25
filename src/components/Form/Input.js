import React from "react";

const Input = ({ value, handleInput }) => {
  return <input type="text" value={value} onChange={handleInput} />;
};

export default Input;
