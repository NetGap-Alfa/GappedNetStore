import { useState, useEffect } from "react";
import "./modifyProductsPage.css";
import { AdminHeader } from "../../components/adminHeader/adminHeader";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { TextArea } from "../../components/textArea/textArea";

export const ModifyProductsPage = () => {

  const [updateProducts, setUpdateProducts] = useState(false)
  const [dataProducts, setDataProducts] = useState([]);
  const [temp, setTemp] = useState('');
  const [dato, setDato] = useState('Actualizar');
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescipcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [urlImagen, setUrlImagen] = useState("");

  const get_rnd = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const get_uuid = (length = 14) => {
    const ar = [
      "abcdefghijklmnopqrstuvxyz",
      "0123456789"
    ]
    const r = new Array(length).fill(0).map(() => {

      let i = get_rnd(0, 1)

      let str = ar[i]

      str = get_rnd(0, 1) ? str.toUpperCase() : str

      const max = str.length - 1
      i = get_rnd(0, max)
      return str.split("")[i]
    }).join("")
    return r
  }

  useEffect(() => {
    getData();

  }, [updateProducts]);

  function getData() {
    fetch(`/api/products`)
      .then((resp) => resp.json())
      .then((resp) => {
        setDataProducts(resp)
        setTemp(0)
      })
      .catch((err) => console.log(err));
  }

  function sending(event) {
    event.preventDefault();
    const dataProduct = JSON.stringify({
      id,
      nombre,
      descripcion,
      precio,
      stock,
      urlImagen
    });

    if (dato === "Crear") {
      fetch(`/api/products/create`, {
        method: "POST",
        body: dataProduct,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => {
          if (resp.state) {
            alert("Se ha Insertado el Registro");
            cleanFields();
          } else {
            alert("El Id ya se ha Registrado");
          }
        })
        .catch((err) => console.log("Ocurrio un error al guardar: ", err));
    } else {
      console.log(`Se va a enviar ${dataProduct}`)
      fetch(`/api/products/update`, {
        method: "PUT",
        body: dataProduct,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => {
          if (resp.state) {
            alert("Se ha actualizado el Registro");
            cleanFields();
          } else {
            alert("El registro no existe");
          }
        })
        .catch((err) => console.log("Ocurrio un error al guardar: ", err));
    }
  }

  function cleanFields() {
    const r = []
    for (let i = 0; i < 1; i++) {
      r.push(get_uuid())
    }
    setId(r[0]);
    setNombre('');
    setDescipcion('');
    setPrecio('');
    setStock('');
    setUrlImagen('');
  }

  function updateFields() {
    setId(dataProducts[temp].id);
    setNombre(dataProducts[temp].nombre);
    setDescipcion(dataProducts[temp].descripcion);
    setPrecio(dataProducts[temp].precio);
    setStock(dataProducts[temp].stock);
    setUrlImagen(dataProducts[temp].urlImagen);
  }

  return (
    <div>
      <AdminHeader />
      {dataProducts.length !== 0 ? (
        <>
          <div className="main-container">
            <div className="secondary-container">
              <div className="main-container div-btn">
                {dataProducts.map((product, index) => (
                  <div className="product-names">
                    <Button
                      text={product.nombre}
                      otherprops="modify-buttons"
                      onClickFunc={() => {
                        setTemp(index)
                        setDato('Actualizar')
                        updateFields()
                      }
                      }
                    />
                  </div>

                ))}

                <div className="product-names">
                  <Button
                    text="Crear Producto"
                    otherprops="create-buttons "
                    onClickFunc={
                      () => {
                        cleanFields()
                        setDato('Crear')
                      }
                    }
                  />
                </div>
              </div>

              <div>

                <img className="img-modifiP" src={urlImagen} />

              </div>

              <form onSubmit={sending}>
                <div className="div-txt">
                  <Input
                    otherInputProps="modify-input"
                    name="id"
                    id="id"
                    tag="Id: "
                    onChange={(e) => setId(e.target.value)}
                    defaultValue={
                      id
                    }
                    disabled="false"

                  />
                  <Input
                    otherInputProps="modify-input"
                    name="name"
                    id="name"
                    tag="Nombre: "
                    onChange={(e) => setNombre(e.target.value)}
                    defaultValue={
                      nombre}
                  />
                  <TextArea
                    otherInputProps="modify-input"
                    name="description"
                    id="description"
                    tag="Descripción: "
                    onChange={(e) => setDescipcion(e.target.value)}
                    defaultValue={
                      descripcion}
                  />
                  <Input
                    otherInputProps="modify-input"
                    name="price"
                    id="price"
                    tag="Precio: "
                    onChange={(e) => setPrecio(e.target.value)}
                    defaultValue={
                      precio}
                  />
                  <Input
                    otherInputProps="modify-input"
                    name="stock"
                    id="stock"
                    tag="Stock: "
                    onChange={(e) => setStock(e.target.value)}
                    defaultValue={
                      stock}
                  />
                  {dato === "Crear" ? (
                    <Input
                      otherInputProps="modify-input"
                      name="url"
                      id="url"
                      tag="Imagen: "
                      onChange={(e) => setUrlImagen(e.target.value)}
                      defaultValue={
                        urlImagen}
                    />
                  ) : null}

                  <div className="secondary-container">
                    {dato !== "Actualizar" ? (
                      <Button text="Crear" />
                    ) : (
                      <Button text="Actualizar" />
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <span>Cargando...</span>

        </>
      )}
    </div>
  );
};
