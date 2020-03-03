import React from "react";
import ListItem from "./ListItem";
import "./List.scss";

const List = ({ data }) => {
  return (
    <ul className="list results__list">
      {data.map(item => (
        <ListItem key={item.idMeal} item={item} />
      ))}
    </ul>
  );
};

export default List;
