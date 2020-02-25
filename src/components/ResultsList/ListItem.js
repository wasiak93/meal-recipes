import React from "react";

const ListItem = ({ item }) => {
  console.log(item);

  let ingridentsWithMeasure = [];
  // I know that max quantity of ingridents is 20, igridents start from 1 not from 0. Ingrident and measure have the same number
  for (let i = 1; i <= 20; i++) {
    if (item[`strIngredient${i}`] !== "") {
      ingridentsWithMeasure.push({
        name: item[`strIngredient${i}`],
        measure: item[`strMeasure${i}`]
      });
    }
  }

  console.log(ingridentsWithMeasure);

  return <p>{item.strMeal}</p>;
};

export default ListItem;
