import React, { useState } from "react";
import { useSelector } from "react-redux";
import bag from "./img/Cart.svg";

import likes from "./img/Like.svg";

import insta from "./img/instagram.svg";

import search from "./img/search.svg";

import user from "./img/User.svg";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const openSearchBar = () => {
    setOpenSearch(true);
  };
  const closeSearchBar = () => {
    setKeyword("");
    setOpenSearch(false);
  };
  const searchHandler = (e) => {
    e.preventDefault();
    setKeyword("");
    // if(keyword.trim()){
    //     history.push(`/search/${keyword}`)
    // }else{
    //     history.push('/')
    // }
  };
  const {products, productsCount} = useSelector(state => state.products)
  console.log(keyword, products, productsCount);
  return (
    <div className="search-items">
      <form onSubmit={searchHandler} className="search-items">
        <input
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          value={keyword}
          style={
            openSearch
              ? { opacity: "1", right: "0px" }
              : { opacity: "0", right: "-430px" }
          }
          className="search-input"
          type="text"
        />
        <span
          style={
            openSearch
              ? { opacity: "1", left: "156px" }
              : { opacity: "0", right: "-430px" }
          }
          onClick={closeSearchBar}
        ></span>
      </form>

      <div className="links">
        <p style={{ cursor: "pointer" }} onClick={openSearchBar}>
          <img src={search} alt="search" />
        </p>
        <a href="/#">
          <img src={insta} alt="insta" />
        </a>
        <a href="/#">
          <img src={user} alt="user" />
        </a>
        <a href="/#">
          <img src={likes} alt="likes" />
        </a>
        <a href="/#">
          <img src={bag} alt="cart" />
        </a>
      </div>
    </div>
  );
};

export default Search;
