import React, { useState } from "react";
import "./App.scss";
import Form from "./Form/Form";
import Results from "./ResultsList/Results";
import { trackPromise } from "react-promise-tracker";

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setValue] = useState("");
  const [searchValue, setSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = e => {
    e.preventDefault();
    if (inputValue.length >= 2) {
      setSearch(inputValue);
      setIsLoading(true);
      trackPromise(
        fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
        )
          .then(response => {
            if (response.ok) {
              return response;
            } else {
              throw Error("Something gone wrong :(");
            }
          })
          .then(response => {
            return response.json();
          })
          .then(
            resp => {
              if (resp.meals) {
                setData([...resp.meals]);
              } else setData(false);
              setIsLoading(false);
            },

            []
          )
          .catch(error => {
            console.log(error);
            setIsLoading(false);
          })
      );
    } else {
      setData(true);
    }
  };

  const handleInput = e => {
    setValue(e.target.value);
  };

  let results = "";

  if (!isLoading && !data) {
    results = (
      <p className="wrapper__results-info"> no result for "{searchValue}"</p>
    );
  } else if (inputValue.length <= 1 && data === true) {
    results = (
      <p className="wrapper__results-info">please type at least two chars</p>
    );
  } else if (data.length >= 1 && searchValue) {
    results = (
      <>
        <p className="wrapper__results-info">
          results for "{searchValue}"<span>({data.length}):</span>
        </p>
        <Results data={data} search={searchValue} />
      </>
    );
  }

  return (
    <div className="wrapper">
      <Form submit={handleForm} value={inputValue} handleInput={handleInput} />
      {results}
    </div>
  );
}

export default App;
