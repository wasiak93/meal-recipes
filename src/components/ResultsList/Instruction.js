import React from "react";
import "./Instruction.scss";

const Instruction = ({ ingridentsWithMeasure, item, closePopup }) => {
  return (
    <div className="popup">
      <div className="item list__item list__item--active">
        <button
          className="close-button popup__close-button "
          onClick={closePopup}
        >
          <span className="close-button__box">
            <span className="close-button__inner"></span>
          </span>
        </button>
        <p className="item__meal-name">{item.strMeal}</p>
        <div className="item__details ">
          <div className="item__photo-wrapper">
            <img
              src={item.strMealThumb}
              alt="meal"
              className="item__photo"
            ></img>
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
              className="item__button item__button--bigger"
              target="_blank"
              rel="noopener noreferrer"
            >
              go to video{" "}
            </a>
          )}
        </div>
        <p className="item__instruction-text">{item.strInstructions}</p>
      </div>
    </div>
  );
};

export default Instruction;
