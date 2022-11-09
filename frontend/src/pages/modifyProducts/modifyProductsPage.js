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
      <div className="main-container">
        <div className="secondary-container">
          <div className="main-container div-btn">
            {productsExample.productos.map((product, index) => (
              <div className="product-names">
                <Button
                  text={product.nombre}
                  otherprops="modify-buttons"
                  onClickFunc={() =>
                    setActiveProduct(productsExample.productos.at(index))
                  }
                />
              </div>
            ))}
            <div className="product-names">
              <Button
                text="Crear Producto"
                otherprops="create-buttons "
                onClickFunc={() =>
                  setActiveProduct({
                    id: "",
                    urlImagen: "https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png?20091205084734",
                    nombre: "",
                    descripcion: "",
                    stock: "",
                    precio: "",
                  })
                }
              />
            </div>
          </div>
          <div>
            <img className="img-modifiP" src={activeProduct.urlImagen} />
          </div>
          <div className="div-txt">
            <Input
              otherInputProps="modify-input"
              name="name"
              id="name"
              tag="Nombre: "
              defaultValue={activeProduct.nombre}
            />
            <TextArea
              otherInputProps="modify-input"
              name="description"
              id="description"
              tag="Descripción: "
              defaultValue={activeProduct.descripcion}
            />
            <Input
              otherInputProps="modify-input"
              name="price"
              id="price"
              tag="Precio: "
              defaultValue={activeProduct.precio}
            />
            <Input
              otherInputProps="modify-input"
              name="stock"
              id="stock"
              tag="Stock: "
              defaultValue={activeProduct.stock}
            />
            {activeProduct.id == "" ? (
              <Input
                otherInputProps="modify-input"
                name="url"
                id="url"
                tag="Imagen: "
              />
            ) : null}
          </div>
        </div>
        <div className="secondary-container">
          {activeProduct.id == "" ? (
            <Button text="Crear" />
          ) : (
            <Button text="Actualizar" />
          )}
        </div>
      </div>
    </div>
  );
};
