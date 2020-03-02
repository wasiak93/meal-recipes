import React, { useState } from "react";
import "./App.scss";
import Form from "./Form/Form";
import Result from "./ResultsList/List";
import { trackPromise } from "react-promise-tracker";

function App() {
  const name = "chicken";
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [isSearch, setSearch] = useState(false);

  const handleForm = e => {
    e.preventDefault();
    setSearch(true);
    trackPromise(
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw Error("Something gone wrong :(");
          }
        })

        .then(resp => setData([...resp.meals]), [])
        .catch(error => console.log(error))
    );
  };

  const handleInput = e => {
    setValue(e.target.value);
  };

  let result = "";
  if (data.length >= 1) {
    result = <Result data={data} />;
  } else if (isSearch && typeof data.length >= 1) {
    result = (
      <p className="app__no-result-info"></p>
    )`Upsss, ther isn't any recipes for '${value} `;
  }
  return (
    <div className="app">
      <Form submit={handleForm} value={value} handleInput={handleInput} />
      {result}
    </div>
  );
}

export default App;
