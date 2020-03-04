import React from "react";
import ListItem from "./ListItem";
import "./List.scss";

const List = ({ data }) => {
  return (
    <ul className="list results__list">
      {data.map((item, index) => (
        <ListItem key={index + 1} item={item} />
      ))}
    </ul>
  );
};

export default List;
