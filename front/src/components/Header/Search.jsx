import React, {useState, useRef, useEffect} from 'react';
// import { useSelector } from "react-redux";
import bag from "./img/Cart.svg";
import likes from "./img/Like.svg";
import insta from "./img/instagram.svg";
import search from "./img/search.svg";
import user from "./img/User.svg";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const inputRef = useRef(null);

//   const { products, productsCount } = useSelector((state) => state.products);

  const searchHandler = (e) => {
    setKeyword(e.target.value);
  };

  const openSearchBar = () => {
    setOpenSearch(!openSearch);
  };

  const closeSearchBar = () => {
    setOpenSearch(false);
    setKeyword("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        closeSearchBar();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
const submitSearch = (e) => {
    e.preventDefault();
    // Добавьте код для обработки поискового запроса, например, переход на страницу результатов поиска
    if (keyword.trim()) {
      // Реализуйте свою логику поиска, например, переход на страницу с результатами поиска
      console.log("Выполняется поиск:", keyword);
    } else {
      console.log("Введите поисковый запрос");
    }
  };
  return (
    <div className="links">
      <form onSubmit={submitSearch}>
        <input
          ref={inputRef}
          onChange={searchHandler}
          style={openSearch ? { display: "block" } : { display: "none" }}
          type="text"
          placeholder="Пошук..."
          value={keyword}
        />
      </form>
      <p
        style={
          openSearch
            ? { position: "absolute", left: "-229px" }
            : { position: "absolute" }
        }
        onClick={openSearchBar}
      >
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
  );
};

export default Search;

