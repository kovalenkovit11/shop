import React from "react";
import logo from "./img/logo.svg";
// import bag from "./img/Cart.svg";

// import likes from "./img/Like.svg";

// import insta from "./img/instagram.svg";

// import search from "./img/search.svg";
import text from "./img/Text.svg";
// import user from "./img/User.svg";

import "./style.scss";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <div className="head-title">
        <img src={text} alt="text" />
      </div>
      <div className="container">
        <div className="header-links">
          <a href="/"><div className="logo">
            <img className="logo-img" src={logo} alt="logo" />
            <p className="logo-title">Dark coffee capsule</p>
          </div></a>
          <div className="links">
           <Search/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
