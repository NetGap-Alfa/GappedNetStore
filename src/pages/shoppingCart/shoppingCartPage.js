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
        <table>
          <tr>
            <th>Imagen</th>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Valor</th>
            <th>Total</th>
          </tr>
          {productCartExample.productos.map((product) => (
            <tr>
              <td>
                <img src={product.urlImage}/>
              </td>
              <td>{product.amount}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.price*product.amount}</td>
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
