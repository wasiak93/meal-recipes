import React from "react";
import List from "./List";
import "./Results.scss";

const Results = ({ data, search }) => {
  return (
    <div className="results app__results">
      {search ? (
        <p className="wrapper__results-info">results for "{search}"</p>
      ) : null}
      <List data={data} />
    </div>
  );
};

export default Results;
