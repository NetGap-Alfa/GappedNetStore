import React from "react";
import axios from "axios";
import "./clientShoppingListPage.css";
import { ClientHeader } from "../../components/clientHeader/clientHeader";
import { Button } from "../../components/button/button";

import "./css/animate.css";
import "./css/icomoon.css";
import "./css/bootstrap.css";
import "./css/owl.carousel.min.css";
import "./css/owl.theme.default.min.css";
import "./css/style.css";

export const ClientShoppingListPage = () => {
  const [productos, setProductos] = React.useState([{}]);

  const baseURL = "/api/products/stock";

  React.useEffect(() => {
    async function getData() {
      await axios.get(baseURL).then((response) => {
        setProductos(response.data);
      });
    }
    getData();
  }, []);

  return (
    <div>
      <ClientHeader />
      <div id="fh5co-page">
        <div id="fh5co-main">
          <div className="fh5co-narrow-content">
            <h2
              className="fh5co-heading animate-box"
              data-animate-effect="fadeInLeft"
            >
              Productos{" "}
            </h2>
            <div className="row animate-box" data-animate-effect="fadeInLeft">
              <div className="clearfix visible-sm-block"></div>
              {productos?.map((productadmin) => (
                <>
                  <div className="clearfix visible-sm-block"></div>
                  <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                    <a href="#">
                      <img
                        src={productadmin.urlImagen}
                        alt="Free HTML5 Website Template by FreeHTML5.co"
                        className="img-responsive"
                      />
                      <h3 className="fh5co-work-title">
                        {productadmin.nombre}
                      </h3>
                      <p>$ {productadmin.precio}</p>
                      <p>Stock: {productadmin.stock}</p>
                    </a>

                    <div className="cen">
                      <select name="amount" id="amount-selector">
                        {Array.apply(null, { length: productadmin.stock }).map(
                          (e, i) => (
                            <option value={i + 1}>{i + 1}</option>
                          )
                        )}
                      </select>
                      <Button
                        text="Comprar"
                        onClickFunc={() => {
                          async function pushToCart() {
                            const amountSelected =
                              document.getElementById("amount-selector");
                            await axios.post("/api/shoppingCart/addToCart", {
                              productId: productadmin.id,
                              amount: parseInt(
                                amountSelected.options[amountSelected.selectedIndex].text
                              ),
                            });
                          }
                          pushToCart();
                        }}
                      />
                    </div>
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
