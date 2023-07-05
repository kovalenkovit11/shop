import "./style.scss";
import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../actions/productActions'
import DropDown from "../../components/DropDown/DropDown";
import Pagination from 'react-js-pagination'
import { useSelector } from "react-redux";
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
 
const [currentPage, setCurrentPage] = useState(1)
function setCurrentPageNo(pageNumber) {
  setCurrentPage(pageNumber)
}
const {loading, products, productsCount, resPerPage} = useSelector(state => state.products)
console.log(products, productsCount, resPerPage);

const dispatch = useDispatch();

useEffect(() =>{
  dispatch(getProducts(currentPage))
},[dispatch, currentPage])
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
        <Cards setOpenModal={setOpenModal} products={products} loading={loading}/>
        <Modal openModal={openModal} setOpenModal={setOpenModal}/>
        {resPerPage <= productsCount && (
                        <div className="pagination">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'>'}
                                prevPageText={'<'}
                                firstPageText={'<<'}
                                lastPageText={'>>'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>
                    )}

    </div>
  );
}

export default Catalog;
