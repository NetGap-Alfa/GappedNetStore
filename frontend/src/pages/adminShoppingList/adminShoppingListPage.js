import React from "react";
import { useState, useEffect } from "react";
import "./adminShoppingListPage.css";
import { AdminHeader } from "../../components/adminHeader/adminHeader";
import { productsExample } from "../../data/data";

import './css/animate.css'
import './css/icomoon.css'
import './css/bootstrap.css'
import './css/owl.carousel.min.css'
import './css/owl.theme.default.min.css'
import './css/style.css'

export const AdminShoppingListPage = () => {
  const [updateProducts,setUpdateProducts] = useState(false)
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    getData();
    console.log(`Datos ${dataProducts.length}`);
  }, [updateProducts]);

  function getData() {
    fetch("http://localhost:5000/api/products")
      .then((resp) => resp.json())
      .then((resp) => {
        return setDataProducts(resp.data)
      })
      .catch((err) => console.log(err));
  }
  
  return (
    <div>
      <AdminHeader />

      <div id="fh5co-page">


        <div id="fh5co-main">

          <div className="fh5co-narrow-content">
            <h2 className="fh5co-heading animate-box" data-animate-effect="fadeInLeft">Productos </h2>
            <div className="row animate-box" data-animate-effect="fadeInLeft">
              <div className="clearfix visible-sm-block"></div>

              {dataProducts.map((productadmin) => (
                <>
                  <div className="clearfix visible-sm-block"></div>
                  <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                    <a href="#">
                      <img src={productadmin.urlImagen} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                      <h3 className="fh5co-work-title">{productadmin.nombre}</h3>
                      <p  >$ {productadmin.precio}</p>
                      <p >Stock: {productadmin.stock}</p>
                    </a>

                  </div>
                  <div className="clearfix visible-sm-block"></div>
                </>
              ))}


            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
