import React from "react";
import List from "./List";
import "./Results.scss";

const Results = ({ data }) => {
  return (
    <div className="results app__results">
      <List data={data} />
    </div>
  );
};

export default Results;
