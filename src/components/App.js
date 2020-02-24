import React from "react";
import "./App.css";

function App() {
  const name = "chicken";

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error("Something gone wrong :(");
      }
    })
    .then(resp => console.log(resp.meals))
    .catch(error => console.log(error));

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
