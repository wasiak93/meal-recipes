import React from "react";

const ListItem = ({ item }) => {
  let ingridentsWithMeasure = [];
  // I know that max quantity of ingridents is 20, igridents start from 1 not from 0. Ingrident and measure have the same number
  for (let i = 1; i <= 20; i++) {
    if (item[`strIngredient${i}`] !== "") {
      ingridentsWithMeasure.push({
        id: i,
        name: item[`strIngredient${i}`],
        measure: item[`strMeasure${i}`]
      });
    }
  }

  return (
    <div>
      <p>{item.strMeal}</p>
      <div>
        {ingridentsWithMeasure.map(ingri => (
          <p key={item.idMeal + ingri.id}>
            <span>{ingri.name}: </span>
            <span>{ingri.measure}</span>
          </p>
        ))}
      </div>
      {/* <video src={item.strYoutube} samesite=""></video> */}
    </div>
  );
};

export default ListItem;
