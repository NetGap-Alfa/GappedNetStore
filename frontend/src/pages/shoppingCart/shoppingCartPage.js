import { useNavigate } from "react-router-dom";
import React from "react";
import "./shoppingCartPage.css";
import { ClientHeader } from "../../components/clientHeader/clientHeader";
import { Button } from "../../components/button/button";
import { productCartExample } from "../../data/data";

export const ShoppingCartPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ClientHeader />
      <div className="main-container">
        <table className="table-shoping" >
          <tr>
            <th className="th-shopingCart">Imagen</th>
            <th className="th-shopingCart">Cantidad</th>
            <th className="th-shopingCart">Producto</th>
            <th className="th-shopingCart">Valor</th>
            <th className="th-shopingCart">Total</th>
          </tr>
          {productCartExample.productos.map((product) => (
            <tr>
              <td className="th-shopingCart">
                <img className="img-shoping" src={product.urlImage}/>
              </td>
              <td className="th-shopingCart">{product.amount}</td>
              <td className="th-shopingCart">{product.name}</td>
              <td className="th-shopingCart">{product.price}</td>
              <td className="th-shopingCart">{product.price*product.amount}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="button-container">
        <div className="header-button-container">
          <Button text="Terminar venta" />
        </div>
        <Button
          text="Cancelar"
          onClickFunc={() => navigate("/client/shoppingList")}
        />
      </div>
    </div>
  );
};
