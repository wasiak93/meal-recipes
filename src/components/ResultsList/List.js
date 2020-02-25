import React from "react";
import ListItem from "./ListItem";

const Result = ({ data }) => {
  return (
    <div>
      {data.map(item => (
        <ListItem key={item.idMeal} item={item} />
      ))}
    </div>
  );
};

export default Result;
