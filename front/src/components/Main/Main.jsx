import React from "react";
import "./style.scss";
import InstaBlock from "../InstaBlock/InstaBlock";
import arrow from "./img/Arrow.svg";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="main">
            <p className="main-text">
              Кава та кавомашини від надійного постачальника
            </p>
            <NavLink to="/catalog">
              <button className="main-btn">
                Перейти в каталог <img src={arrow} alt="arrow" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="main-grid_items">
        <div className="grid-item first">
          <p className="grid-item__text">Кава в капсулах</p>
        </div>
        <div className="grid-item second">
          <p className="grid-item__text">Капсульні кавоварки</p>
        </div>
        <div className="grid-item third">
          <p className="grid-item__text">Капучинатори</p>
        </div>
        <div className="grid-item four">
          <p className="grid-item__text">Аксесуари</p>
        </div>
      </div>
      <InstaBlock />
    </>
  );
};

export default Main;
