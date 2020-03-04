import React, { useState } from "react";
import "./App.scss";
import Form from "./Form/Form";
import Results from "./ResultsList/Results";
import { trackPromise } from "react-promise-tracker";
// import { useEffect } from "react";

function App() {
  // const name = "chicken";
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = e => {
    e.preventDefault();
    setClicked(true);
    if (value.length >= 2) {
      setSearch(value);
      setIsLoading(true);
      trackPromise(
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
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
          .catch(error => console.log(error))
      );
    } else {
      setData("");
    }
  };

  // useEffect(() => {
  //   console.log(typeof data);
  //   console.log(showNoResults);
  //   if (typeof data == "string") return setShow(true);
  // }, [data, showNoResults]);
  const handleInput = e => {
    setClicked(false);
    setValue(e.target.value);
  };

  return (
    <div className="wrapper">
      <Form submit={handleForm} value={value} handleInput={handleInput} />
      {/* {showNoResults ? <p>ahoj</p> : null} */}
      {/* {data === "" ? (
        <p className="wrapper__results-info"> no result for "{value}"</p>
      ) : null} */}
      {isLoading === false && data === false && isClicked === true ? (
        <p className="wrapper__results-info"> no result for "{value}"</p>
      ) : null}
      {data.length >= 1 ? <Results data={data} search={search} /> : null}
    </div>
  );
}

export default App;
