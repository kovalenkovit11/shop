import React from "react";
import "./style.scss";

const InstaBlock = () => {
  return (
    <div>
      <div className="content-title">
        <p>Слідкуйте за нами в Instagram</p>
        <a href="/#">@dark.coffeecaps</a>
      </div>
      <div className="content-items">
        <a href="/#">
          <div className="item item-first"></div>
        </a>
        <a href="/#">
          {" "}
          <div className="item item-second"></div>
        </a>
        <a href="/#">
          <div className="item item-third"></div>
        </a>
        <a href="/#">
          {" "}
          <div className="item item-four"></div>
        </a>
        <a href="/#">
          <div className="item item-five"></div>
        </a>
        <a href="/#">
          {" "}
          <div className="item item-six"></div>
        </a>
      </div>
    </div>
  );
};

export default InstaBlock;
