import React from "react";
import Input from "./Input";
import Button from "./Button";
import "./Form.scss";

const Form = ({ submit, value, handleInput }) => {
  return (
    <form action="submit" onSubmit={submit} className="form">
      <Input value={value} handleInput={handleInput} />
      <Button />
    </form>
  );
};

export default Form;
