import React, { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import Result from "./ResultsList/List";

function App() {
  const name = "chicken";
  const [data, setData] = useState([]);
  const [value, setValue] = useState("chicken");

  const handleForm = e => {
    e.preventDefault();

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
  return (
    <div className="App">
      <Form submit={handleForm} value={value} handleInput={handleInput} />
      {data.length >= 1 ? <Result data={data} /> : null}
    </div>
  );
}

export default App;
