import React, { useState } from "react";
import "./modifyProductsPage.css";
import { AdminHeader } from "../../components/adminHeader/adminHeader";
import { productsExample } from "../../data/data";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { TextArea } from "../../components/textArea/textArea";

export const ModifyProductsPage = () => {
  const [activeProduct, setActiveProduct] = useState(
    productsExample.productos.at(0)
  );

  return (
    <div>
      <AdminHeader />
      <div className="secondary-container">
        <div className="main-container div-btn">
          {productsExample.productos.map((product, index) => (
            <div className="product-names">
              <Button
                text={product.nombre}
                onClickFunc={() =>
                  setActiveProduct(productsExample.productos.at(index))
                }
              />
            </div>
          ))}
        </div>
        <div>
          <img className="img-modifiP" src={activeProduct.urlImagen} />
        </div>
        <div className="div-txt">
          <Input c
            name="name"
            id="name"
            tag="Nombre: "
            defaultValue={activeProduct.nombre}
          />
          <TextArea 
            name="description"
            id="description"
            tag="Descripción: "
            defaultValue={activeProduct.descripcion}
          />
          <Input
            name="price"
            id="price"
            tag="Precio: "
            defaultValue={activeProduct.precio}
          />
          <Input
            name="stock"
            id="stock"
            tag="Stock: "
            defaultValue={activeProduct.stock}
          />
        </div>
      </div>
    </div>
  );
};
