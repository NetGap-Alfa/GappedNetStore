import { useState, useEffect } from "react";
import "./modifyProductsPage.css";
import { AdminHeader } from "../../components/adminHeader/adminHeader";
import { productsExample } from "../../data/data";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { TextArea } from "../../components/textArea/textArea";

export const ModifyProductsPage = () => {
/*  const [activeProduct, setActiveProduct] = useState(
    productsExample.productos.at(0)
  );
*/
  const [updateProducts, setUpdateProducts] = useState(false)
  const [dataProducts, setDataProducts] = useState([]);
 const [temp, setTemp] = useState('');

  useEffect(() => {
    getData();
    //console.log(`Datows ${dataProducts.length}`);
  }, [updateProducts]);
  
  function getData() {
    fetch(`http://localhost:5000/api/products`)
      .then((resp) => resp.json())
      .then((resp) => {
        //console.log(resp)//;})
        setDataProducts(resp)
      })
      .catch((err) => console.log(err));
  }


  return (
    <div>
      <AdminHeader />
      <div className="main-container">
        <div className="secondary-container">
          <div className="main-container div-btn">

            {dataProducts.map((product, index) => (
            
              <div className="product-names">
                            <Button
                  text={product.nombre}
                  otherprops="modify-buttons"
                  onClickFunc={() =>
                    //console.log(index)
                    setTemp(index)
                   // setDataProducts(dataProducts.at(index))
                  }
                />
              </div>
              
            ))}
            <div className="product-names">
              <Button
                text="Crear Producto"
                otherprops="create-buttons "
                onClickFunc={
                  
                  () =>
                  setDataProducts({
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
            <span>{temp}</span>
            <br></br>
            <img className="img-modifiP" src={dataProducts.urlImagen} />
          </div>
          <div className="div-txt">
            <Input
              otherInputProps="modify-input"
              name="name"
              id="name"
              tag="Nombre: "
              defaultValue={dataProducts.nombre}
            />
            <TextArea
              otherInputProps="modify-input"
              name="description"
              id="description"
              tag="Descripción: "
              defaultValue={dataProducts.descripcion}
            />
            <Input
              otherInputProps="modify-input"
              name="price"
              id="price"
              tag="Precio: "
              defaultValue={dataProducts.precio}
            />
            <Input
              otherInputProps="modify-input"
              name="stock"
              id="stock"
              tag="Stock: "
              defaultValue={dataProducts.stock}
            />
            {dataProducts.id == "" ? (
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
          {dataProducts.id == "" ? (
            <Button text="Crear" />
          ) : (
            <Button text="Actualizar" />
          )}
        </div>
      </div>
    </div>
  );
};
