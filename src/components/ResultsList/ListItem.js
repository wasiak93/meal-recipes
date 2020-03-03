import React from "react";
import "./ListItem.scss";

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
    <li className="item list__item">
      <p className="item__meal-name">{item.strMeal}</p>
      <div className="item__details">
        <img src={item.strMealThumb} alt="meal" className="item__photo"></img>
        <div className="item-ingridents">
          {ingridentsWithMeasure.map(ingri => (
            <p key={item.idMeal + ingri.id} className="item__ingrident">
              {ingri.name}: {ingri.measure}
            </p>
          ))}
        </div>
      </div>
      <a href={item.strYoutube} className="item__video-button">
        go to video{" "}
      </a>
    </li>
  );
};

export default ListItem;
