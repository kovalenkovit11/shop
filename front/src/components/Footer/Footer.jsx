import React from "react";
import "./style.scss";
import novaPost from "./img/novapost.svg";
import ukrPost from "./img/ukrpost.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-items">
          <h4 className="footer-title">Оплата</h4>
          <div className="footer-options">
            <p>100% переказ на картку</p>
            <p>Накладений платіж</p>
          </div>
        </div>
        <div className="footer-items">
          <h4 className="footer-title">Доставка</h4>
          <div className="footer-options">
            <p>Нова пошта</p>
            <p>Укр пошта</p>
            <div className="footer-logo">
              <img src={novaPost} alt="nova Post Logo" />
              <img src={ukrPost} alt="urk Post Logo" />
            </div>
          </div>
        </div>
        <div className="footer-items">
          <h4 className="footer-title">Графік роботи </h4>
          <div className="footer-options">
            <p>10:00 - 19:00, Пн - Пт</p>
          </div>
        </div>
        <div className="footer-items">
          <h4 className="footer-title">Контакти</h4>
          <div className="footer-options">
            <span>
              Instagram: <a href="/#"> @dark.coffeecaps</a>{" "}
            </span>
            <p>dark.coffeecaps@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
