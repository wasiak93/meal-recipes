import React, { useState, useEffect } from "react";
import "./ListItem.scss";
import Instruction from "./Instruction";

const ListItem = ({ item }) => {
  const [activeInstruction, setActiveInstruction] = useState(false);

  const handleInstructionButton = () => {
    setActiveInstruction(!activeInstruction);
  };

  // const handleButtonClosePopup = () => {
  //   setActiveInstruction(false);
  // };
  let ingridentsWithMeasure = [];
  // I know that max quantity of ingridents is 20, igridents start from 1 not from 0. Ingrident and measure have the same number
  for (let i = 1; i <= 20; i++) {
    if (
      item[`strIngredient${i}`] !== "" &&
      item[`strIngredient${i}`] !== null
    ) {
      ingridentsWithMeasure.push({
        id: i,
        name: item[`strIngredient${i}`],
        measure: item[`strMeasure${i}`]
      });
    }
  }

  // clean when item is change
  useEffect(() => {
    setActiveInstruction(false);
  }, [item]);

  return (
    <li className="item list__item">
      <p className="item__meal-name">{item.strMeal}</p>
      <div className="item__details">
        <div className="item__photo-wrapper">
          <img src={item.strMealThumb} alt="meal" className="item__photo"></img>
        </div>
        <div className="item__ingridents">
          {ingridentsWithMeasure.map(ingri => (
            <div key={item.idMeal + ingri.id} className="item__ingrident">
              <span className="item__ingrident-name">{ingri.name}</span>
              <span className="item__measure">{ingri.measure}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="item__buttons-wrapper">
        {item.strYoutube && (
          <a
            href={item.strYoutube}
            className="item__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            go to video{" "}
          </a>
        )}
        <button className="item__button" onClick={handleInstructionButton}>
          instruction
        </button>
      </div>
      {activeInstruction && (
        <Instruction
          ingridentsWithMeasure={ingridentsWithMeasure}
          item={item}
          closePopup={handleInstructionButton}
        />
      )}
    </li>
  );
};

export default ListItem;
