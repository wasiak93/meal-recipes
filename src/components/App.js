import React, { useState } from "react";
import "./App.scss";
import Form from "./Form/Form";
import Result from "./ResultsList/List";
import { trackPromise } from "react-promise-tracker";
// import { useEffect } from "react";

function App() {
  const name = "chicken";
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  // const [search, setSearch] = useState(false);
  // const [showNoResults, setShow] = useState(false);

  const handleForm = e => {
    e.preventDefault();
    if (value.length >= 2) {
      trackPromise(
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
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
          .then(resp => {
            if (resp.meals) {
              setData([...resp.meals]);
            } else setData("");
          }, [])
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
    setValue(e.target.value);
  };
  return (
    <div className="wrapper">
      <Form submit={handleForm} value={value} handleInput={handleInput} />
      {/* {showNoResults ? <p>ahoj</p> : null} */}
      {/* {data === "" ? (
        <p className="wrapper__results-info"> no result for "{value}"</p>
      ) : null} */}
      {data.length >= 1 ? <Result data={data} /> : null}
    </div>
  );
}

export default App;
