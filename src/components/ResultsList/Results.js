import React, { useState, useEffect, useCallback } from "react";
import List from "./List";
import { trackPromise } from "react-promise-tracker";

const Results = ({ search }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(() => {
    setIsLoading(true);
    trackPromise(
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
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
  }, [search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  let resultsInfo = "";

  if (data && !isLoading) {
    resultsInfo = (
      <p className="wrapper__results-info">
        results for "{search}"<span>({data.length}):</span>
      </p>
    );
  } else if (!data && !isLoading) {
    resultsInfo = (
      <p className="wrapper__results-info"> no results for "{search}"</p>
    );
  }

  return (
    <div className="results app__results">
      {resultsInfo}
      {data && <List data={data} />}
    </div>
  );
};

export default React.memo(Results);
