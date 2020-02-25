import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = ({ submit, value, handleInput }) => {
  return (
    <form action="submit" onSubmit={submit}>
      <Input value={value} handleInput={handleInput} />
      <Button />
    </form>
  );
};

export default Form;
