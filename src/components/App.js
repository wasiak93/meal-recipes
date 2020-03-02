import React, { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import Result from "./ResultsList/List";

function App() {
  const name = "chicken";
  const [data, setData] = useState([]);
  const [value, setValue] = useState("chicken");
  const [isSearch, setSearch] = useState(false);

  const handleForm = e => {
    e.preventDefault();
    setSearch(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Something gone wrong :(");
        }
      })
      .then(resp => setData([...resp.meals]), [])
      .catch(error => console.log(error));
  };

  const handleInput = e => {
    setValue(e.target.value);
  };

  let result = "";
  if (data.length >= 1) {
    result = <Result data={data} />;
  } else if (isSearch) {
    result = `Upsss, ther isn't any recipes for '${value} `;
  }
  return (
    <div className="App">
      <Form submit={handleForm} value={value} handleInput={handleInput} />
      {typeof data === "object" ? result : null}
    </div>
  );
}

export default App;
