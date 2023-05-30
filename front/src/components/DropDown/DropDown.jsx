
import React, { useState, useRef, useEffect } from "react";
import "./style.scss";

const DropDown = ({ options, selected, setSelected, category, id }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropDownRef = useRef(null);
  const dropDownContentRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        dropDownRef.current.contains(e.target) ||
        dropDownContentRef.current.contains(e.target)
      ) {
        return;
      }
      setIsActive(false);
    };
    if (isActive) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isActive]);

  const selectItem = (option) => {
    setSelected(option.name);
    setSelectedOption(option.id);
    setIsActive(false);
  };

  const openDropDown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="catalog-filter">
      <div
        className="dropdown-btn category"
        ref={dropDownRef}
        onClick={() => openDropDown()}
      >
        <p>
          {category} {selected}
        </p>
        <svg
          className={isActive ? "active-svg" : "svg"}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6667 6L8.02463 10.6421L3.38252 6"
            stroke="#828282"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isActive && (
        <div className="dropdown-content" ref={dropDownContentRef}>
          <div className="dd">
            {options.map((category) => (
              <div
                key={category.id}
                className="dropdown-item"
                onClick={() => selectItem(category)}
              >
                <span
                  className={selectedOption === category.id ? "active-circle" : ""}
                ></span>
                <p>{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
