import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import "./shoppingCartPage.css";
import { ClientHeader } from "../../components/clientHeader/clientHeader";
import { Button } from "../../components/button/button";

export const ShoppingCartPage = () => {
  const navigate = useNavigate();
  const [shoppingCart, setShoppingCart] = React.useState([{}]);

  const baseURL = "/api/shoppingCart";

  React.useEffect(() => {
    async function getData() {
      await axios.get(baseURL).then((response) => {
        setShoppingCart(response.data);
      });
    }
    getData();
  }, []);

  return (
    <div>
      <ClientHeader />
      <div className="main-container">
        <table className="table-shoping">
          <tr>
            <th className="th-shopingCart">Imagen</th>
            <th className="th-shopingCart">Cantidad</th>
            <th className="th-shopingCart">Producto</th>
            <th className="th-shopingCart">Valor</th>
            <th className="th-shopingCart">Total</th>
          </tr>
          {shoppingCart?.at(0).productos?.map((product) => (
            <tr>
              <td className="th-shopingCart-image">
                <img className="img-shoping" src={product.urlImagen} />
              </td>
              <td className="th-shopingCart-amount">{product.amount}</td>
              <td className="th-shopingCart-name">{product.nombre}</td>
              <td className="th-shopingCart-price">{product.precio}</td>
              <td className="th-shopingCart-total">
                {(product.precio * product.amount).toFixed(2)}
              </td>
            </tr>
          ))}
          <tr>
            <td className="th-shopingCart-total">Total: </td>
            <td />
            <td />
            <td />
            <td className="th-shopingCart-total">
              {shoppingCart.at(0).precioTotal?.toFixed(2)}
            </td>
          </tr>
        </table>
      </div>
      <div className="button-container">
        <div className="header-button-container">
          <Button
            text="Terminar venta"
            onClickFunc={() => {
              async function pushToCart() {
                await axios.post("/api/shoppingCart/buy");
              }
              pushToCart();
              alert("Venta finalizada");
            }}
          />
        </div>
        <Button
          text="Cancelar"
          onClickFunc={() => navigate("/client/shoppingList")}
        />
      </div>
    </div>
  );
};
