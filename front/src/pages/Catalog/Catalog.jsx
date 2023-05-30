import "./style.scss";
import DropDown from "../../components/DropDown/DropDown";
import { useState } from "react";
import Cards from '../../components/Cards/Cards';
import Modal from '../../components/Modal/Modal';
import {
  category,
  filterByDate,
  typeOfCaps,
  maker,
  intense,
  storage,
  sizeCup,
} from "../../utils/filter";

function Catalog({openModal, setOpenModal}) {
  

  const [selected1, setSelected1] = useState("Кава в капсулах");
  const [selected2, setSelected2] = useState("Новинки");
  const [selected3, setSelected3] = useState("Новинки");
  const [selected4, setSelected4] = useState("Виробник");
  const [selected5, setSelected5] = useState("1");
  const [selected6, setSelected6] = useState("Тип кави");
  const [selected7, setSelected7] = useState("Розмір чашки");

  return (
    <div className="container">
      <div>
        <p className="catalog-title">Каталог</p>
      </div>
      <div className="dropDowns">
        <DropDown
          id={1}
          selected={selected1}
          setSelected={setSelected1}
          options={category}
          category={"Категорія:"}
        />

        <DropDown
          id={2}
          selected={selected2}
          setSelected={setSelected2}
          options={filterByDate}
        />
        <DropDown
          id={3}
          setSelected={setSelected3}
          options={typeOfCaps}
          category={selected3}
        />
        <DropDown
          id={4}
          selected={selected4}
          setSelected={setSelected4}
          options={maker}
        />
        <DropDown
          id={5}
          setSelected={setSelected5}
          options={intense}
          category={`${"Інтенсивність:"} ${selected5}`}
        />
        <DropDown
          id={6}
          selected={selected6}
          setSelected={setSelected6}
          options={storage}
        />
        <DropDown
          id={7}
          setSelected={setSelected7}
          options={sizeCup}
          selected={selected7}
        />
      </div>
        <Cards setOpenModal={setOpenModal}/>
        <Modal openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  );
}

export default Catalog;
