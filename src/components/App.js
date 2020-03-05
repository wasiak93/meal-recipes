import React, { useState } from "react";
import "./App.scss";
import Form from "./Form/Form";
import Results from "./ResultsList/Results";

function App() {
  const [inputValue, setValue] = useState("");
  const [searchValue, setSearch] = useState(false);

  const handleForm = e => {
    e.preventDefault();
    setSearch(inputValue);
  };

  const handleInput = e => {
    setValue(e.target.value);
  };

  let result = "";

  if (searchValue !== false)
    result = (
      <p className="wrapper__results-info">please type at least two chars</p>
    );

  if (searchValue.length >= 2) {
    result = <Results search={searchValue} />;
  }
  return (
    <div className="wrapper">
      <Form submit={handleForm} value={inputValue} handleInput={handleInput} />
      {result}
    </div>
  );
}

export default App;
