import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form/Form";
import Result from "./ResultsList/List";

function App() {
  const name = "chicken";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Something gone wrong :(");
        }
      })
      .then(resp => setData([...resp.meals]))
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="App">
      <Form />
      {data.length >= 1 ? <Result data={data} /> : null}
    </div>
  );
}

export default App;
